import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createLead, getLead, UpdateLeads } from "../../Services/Services";
import "./AddLeadsForm.css";

const AddLeadsForm = () => {
  const [company, setCompany] = useState("");
  const [clientName, setClientName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [assignedFrom, setAssignedFrom] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [followUp, setFollowup] = useState("");
  const [created, setCreated] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [value, setValue] = useState("");
  const [comments, setComments] = useState("");
  const [eventDetails, setEventDetails] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState({
    company: "",
    clientName: "",
    designation: "",
    status: "",
    priority: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    assignedFrom: "",
    assignedTo: "",
    followUp: "",
    created: "",
    meetingType: "",
    value: "",
    comments: "",
    eventDetails: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getLead(id)
        .then((response) => {
          setClientName(response.data.client_name);
          setCompany(response.data.company);
          setDesignation(response.data.designation);
          setAssignedFrom(response.data.assigned_from);
          setAssignedTo(response.data.assigned_to);
          setPhone(response.data.phone);
          setEmail(response.data.email);
          setCity(response.data.city);
          setAddress(response.data.address);
          setPriority(response.data.priority);
          setStatus(response.data.status);
          setCreated(response.data.created);
          setFollowup(response.data.follow_up);
          setMeetingType(response.data.meeting_type);
          setValue(response.data.value);
          setComments(response.data.comments);
          setEventDetails(response.data.event_details);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "clientName":
        setClientName(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "designation":
        setDesignation(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "city":
        setCity(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "priority":
        setPriority(value);
        break;
      case "assignedFrom":
        setAssignedFrom(value);
        break;
      case "assignedTo":
        setAssignedTo(value);
        break;
      case "followUp":
        setFollowup(value);
        break;
      case "created":
        setCreated(value);
        break;
      case "meetingType":
        setMeetingType(value);
        break;
      case "value":
        setValue(value);
        break;
      case "comments":
        setComments(value);
        break;
      case "eventDetails":
        setEventDetails(value);
        break;
      default:
        break;
    }
  };

  const saveOrUpdateLead = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const lead = {
        client_name: clientName,
        company,
        designation,
        phone,
        email,
        city,
        address,
        status,
        priority,
        assigned_from: assignedFrom,
        assigned_to: assignedTo,
        follow_up: followUp,
        created: created,
        meeting_type: meetingType,
        value,
        comments,
        event_details: eventDetails,
      };

      console.log("Sending lead data:", lead);

      if (id) {
        UpdateLeads(id, lead)
          .then((response) => {
            console.log(response.data);
            navigator("/leads");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createLead(lead)
          .then((response) => {
            console.log(response.data);
            navigator("/leads");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    const requiredFields = [
      "company",
      "clientName",
      "designation",
      "status",
      "priority",
      "phone",
      "email",
      "city",
      "address",
      "assignedFrom",
      "assignedTo",
      "followUp",
      "created",
      "meetingType",
      "value",
      "comments",
      "eventDetails",
    ];

    requiredFields.forEach((field) => {
      if (!eval(field).trim()) {
        errorsCopy[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
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
    <div className="add-leads-form-container">
      <div className="add-leads-form-card">
        <h2 className="add-leads-form-title">
          {id ? "Update Lead" : "Add New Lead"}
        </h2>
        <div className="add-leads-form-body">
          <form onSubmit={saveOrUpdateLead} className="leads-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="clientName" className="form-label">
                  Client:
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={clientName}
                  className={`form-control ${
                    errors.clientName ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.clientName && (
                  <div className="invalid-feedback">{errors.clientName}</div>
                )}
              </div>
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
                <label htmlFor="designation" className="form-label">
                  Designation:
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={designation}
                  className={`form-control ${
                    errors.designation ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.designation && (
                  <div className="invalid-feedback">{errors.designation}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  className={`form-control ${errors.city ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.city && (
                  <div className="invalid-feedback">{errors.city}</div>
                )}
              </div>

              <div className="form-group full-width">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.address && (
                  <div className="invalid-feedback">{errors.address}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="value" className="form-label">
                  Value:
                </label>
                <input
                  type="number"
                  id="value"
                  name="value"
                  value={value}
                  className={`form-control ${errors.value ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.value && (
                  <div className="invalid-feedback">{errors.value}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="comments" className="form-label">
                  Comments:
                </label>
                <input
                  type="text"
                  id="comments"
                  name="comments"
                  value={comments}
                  className={`form-control ${
                    errors.comments ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.comments && (
                  <div className="invalid-feedback">{errors.comments}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="status" className="form-label">
                  Status:
                </label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={status}
                  className={`form-control ${
                    errors.status ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.status && (
                  <div className="invalid-feedback">{errors.status}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="priority" className="form-label">
                  Priority:
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  className={`form-control ${
                    errors.priority ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                >
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Mid">Mid</option>
                  <option value="Low">Low</option>
                </select>
                {errors.priority && (
                  <div className="invalid-feedback">{errors.priority}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="assignedFrom" className="form-label">
                  Assigned From:
                </label>
                <input
                  type="text"
                  id="assignedFrom"
                  name="assignedFrom"
                  value={assignedFrom}
                  className={`form-control ${
                    errors.assignedFrom ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.assignedFrom && (
                  <div className="invalid-feedback">{errors.assignedFrom}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="assignedTo" className="form-label">
                  Assigned To:
                </label>
                <input
                  type="text"
                  id="assignedTo"
                  name="assignedTo"
                  value={assignedTo}
                  className={`form-control ${
                    errors.assignedTo ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.assignedTo && (
                  <div className="invalid-feedback">{errors.assignedTo}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="followUp" className="form-label">
                  Follow up Date:
                </label>
                <input
                  type="date"
                  id="followUp"
                  name="followUp"
                  value={followUp}
                  className={`form-control ${
                    errors.followUp ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.followUp && (
                  <div className="invalid-feedback">{errors.followUp}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="eventDetails" className="form-label">
                  Event Details:
                </label>
                <input
                  type="text"
                  id="eventDetails"
                  name="eventDetails"
                  value={eventDetails}
                  className={`form-control ${
                    errors.eventDetails ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.eventDetails && (
                  <div className="invalid-feedback">{errors.eventDetails}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="created" className="form-label">
                  Created Date:
                </label>
                <input
                  type="date"
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
                <label htmlFor="meetingType" className="form-label">
                  Meeting Type:
                </label>
                <input
                  type="text"
                  id="meetingType"
                  name="meetingType"
                  value={meetingType}
                  className={`form-control ${
                    errors.meetingType ? "is-invalid" : ""
                  }`}
                  onChange={handleChange}
                />
                {errors.meetingType && (
                  <div className="invalid-feedback">{errors.meetingType}</div>
                )}
              </div>
            </div>
            <button type="submit" className="submit-button">
              {id ? "Update Lead" : "Add Lead"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLeadsForm;
