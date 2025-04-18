import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"; // Import useSearchParams
import {
  createMeeting,
  getMeetingById,
  updateMeeting,
} from "../../Services/Services";
import "./AddMeetingForm.css";

const AddMeetingForm = () => {
  const [company, setCompany] = useState("");
  const [partner_products, setPartnerProducts] = useState("");
  const [company_products, setCompanyProducts] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [attendee, setAttendee] = useState("");
  const [meeting_location, setMeetingLocation] = useState("");
  const [created, setCreated] = useState("");
  const [follow_up, setFollowup] = useState("");
  const [assigned_to, setAssignedTo] = useState("");

  const { id } = useParams();
  const [searchParams] = useSearchParams(); 
  const leadIdFromParams = searchParams.get("leadId"); 

  const [errors, setErrors] = useState({
    company: "",
    partner_products: "",
    company_products: "",
    conclusion: "",
    speaker: "",
    attendee: "",
    meeting_location: "",
    created: "",
    follow_up: "",
    assigned_to: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getMeetingById(id)
        .then((response) => {
          setCompany(response.data.company);
          setPartnerProducts(response.data.partner_products);
          setCompanyProducts(response.data.company_products);
          setConclusion(response.data.conclusion);
          setSpeaker(response.data.speaker);
          setAttendee(response.data.attendee);
          setMeetingLocation(response.data.meeting_location);
          setCreated(response.data.created);
          setFollowup(response.data.follow_up);
          setAssignedTo(response.data.assigned_to);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "company":
        setCompany(value);
        break;
      case "partner_products":
        setPartnerProducts(value);
        break;
      case "company_products":
        setCompanyProducts(value);
        break;
      case "conclusion":
        setConclusion(value);
        break;
      case "speaker":
        setSpeaker(value);
        break;
      case "attendee":
        setAttendee(value);
        break;
      case "meeting_location":
        setMeetingLocation(value);
        break;
      case "created":
        setCreated(value);
        break;
      case "follow_up":
        setFollowup(value);
        break;
      case "assigned_to":
        setAssignedTo(value);
        break;
      default:
        break;
    }
  };

  const saveOrUpdateMeeting = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const meetingData = {
        company,
        partner_products,
        company_products,
        conclusion,
        speaker,
        attendee,
        meeting_location,
        created,
        follow_up,
        assigned_to,
      };

      // If leadId is available in the URL, add it to the meeting data
      if (leadIdFromParams) {
        meetingData.lead_id = parseInt(leadIdFromParams);
      }

      console.log("Sending meeting data:", meetingData);

      try {
        let response;
        if (id) {
          response = await updateMeeting(id, meetingData);
          console.log("Updated meeting data:", response.data);
        } else {
          response = await createMeeting(meetingData);
          console.log("Created meeting data:", response.data);
        }
        if (leadIdFromParams) {
          navigator(`/view-lead/${leadIdFromParams}`);
        } else {
          navigator("/meeting-records");
        }
      } catch (error) {
        console.error("Error saving/updating meeting:", error);
      }
    }
  };

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    const requiredFields = [
      "company",
      "partner_products",
      "company_products",
      "conclusion",
      "speaker",
      "attendee",
      "meeting_location",
      "created",
      "follow_up",
      "assigned_to",
    ];

    requiredFields.forEach((field) => {
      const fieldValue = eval(field);
      if (!fieldValue || !fieldValue.trim()) {
        errorsCopy[field] = `${
          field.charAt(0).toUpperCase() +
          field
            .slice(1)
            .replace(/([A-Z])/g, " $1")
            .trim()
        } is required`;
        valid = false;
      } else {
        errorsCopy[field] = "";
      }
    });

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="add-meeting-form-container">
      <div className="add-meeting-form-card">
        <h2 className="add-meeting-form-title">
          {id ? "Update Meeting" : "Add New Meeting"}
        </h2>
        <div className="add-meeting-form-body">
          <form onSubmit={saveOrUpdateMeeting} className="meeting-form">
            {" "}
            {/* Corrected onSubmit */}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company:
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={company}
                  className={`form-control ${
                    errors.company ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.company && (
                  <div className="invalid-feedback">{errors.company}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="partner_products" className="form-label">
                  Partner Products:
                </label>
                <input
                  type="text"
                  id="partner_products"
                  name="partner_products"
                  value={partner_products}
                  className={`form-control ${
                    errors.partner_products ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.partner_products && (
                  <div className="invalid-feedback">
                    {errors.partner_products}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="company_products" className="form-label">
                  Company Products:
                </label>
                <input
                  type="text"
                  id="company_products"
                  name="company_products"
                  value={company_products}
                  className={`form-control ${
                    errors.company_products ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.company_products && (
                  <div className="invalid-feedback">
                    {errors.company_products}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="conclusion" className="form-label">
                  Conclusion:
                </label>
                <input
                  type="text"
                  id="conclusion"
                  name="conclusion"
                  value={conclusion}
                  className={`form-control ${
                    errors.conclusion ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.conclusion && (
                  <div className="invalid-feedback">{errors.conclusion}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="speaker" className="form-label">
                  Speaker:
                </label>
                <input
                  type="text"
                  id="speaker"
                  name="speaker"
                  value={speaker}
                  className={`form-control ${
                    errors.speaker ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.speaker && (
                  <div className="invalid-feedback">{errors.speaker}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="attendee" className="form-label">
                  Attendee:
                </label>
                <input
                  type="text"
                  id="attendee"
                  name="attendee"
                  value={attendee}
                  className={`form-control ${
                    errors.attendee ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.attendee && (
                  <div className="invalid-feedback">{errors.attendee}</div>
                )}
              </div>

              <div className="form-group full-width">
                <label htmlFor="meeting_location" className="form-label">
                  Meeting Location:
                </label>
                <input
                  type="text"
                  id="meeting_location"
                  name="meeting_location"
                  value={meeting_location}
                  className={`form-control ${
                    errors.meeting_location ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.meeting_location && (
                  <div className="invalid-feedback">
                    {errors.meeting_location}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="created" className="form-label">
                  Created Date:
                </label>
                <input
                  type="datetime-local"
                  id="created"
                  name="created"
                  value={created}
                  className={`form-control ${
                    errors.created ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.created && (
                  <div className="invalid-feedback">{errors.created}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="follow_up" className="form-label">
                  Follow up Date:
                </label>
                <input
                  type="datetime-local"
                  id="follow_up"
                  name="follow_up"
                  value={follow_up}
                  className={`form-control ${
                    errors.follow_up ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.follow_up && (
                  <div className="invalid-feedback">{errors.follow_up}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="assigned_to" className="form-label">
                  Assigned To:
                </label>
                <input
                  type="text"
                  id="assigned_to"
                  name="assigned_to"
                  value={assigned_to}
                  className={`form-control ${
                    errors.assigned_to ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.assigned_to && (
                  <div className="invalid-feedback">{errors.assigned_to}</div>
                )}
              </div>
            </div>
            <button type="submit" className="submit-button">
              {id ? "Update Meeting" : "Add Meeting"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMeetingForm;
