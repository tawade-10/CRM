import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMeetingById, updateMeeting } from "../../../Services/Services";
import "./UpdateMeetingForm.css"; // Specific CSS for this form

const UpdateMeetingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meetingData, setMeetingData] = useState({
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
    lead_id: "", 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeetingDetails = async () => {
      setLoading(true);
      try {
        const response = await getMeetingById(id);
        setMeetingData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meeting details:", error);
        setError("Failed to fetch meeting details.");
        setLoading(false);
      }
    };

    fetchMeetingDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({
      ...meetingData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMeeting(id, meetingData);
      alert("Meeting record updated successfully!");
      navigate(`/lead-details/${meetingData.lead_id}`); 
    } catch (error) {
      console.error("Error updating meeting:", error);
      setError("Failed to update meeting record.");
    }
  };

  const handleCancel = () => {
    navigate(`/lead-details/${meetingData.lead_id}`); 
  };

  if (loading) {
    return <div>Loading meeting details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="update-meeting-form-container"> 
      <h2>Update Meeting Record</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={meetingData.company}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="partner_products">Partner Products:</label>
          <input
            type="text"
            id="partner_products"
            name="partner_products"
            value={meetingData.partner_products}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company_products">Company Products:</label>
          <input
            type="text"
            id="company_products"
            name="company_products"
            value={meetingData.company_products}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="conclusion">Conclusion:</label>
          <textarea
            id="conclusion"
            name="conclusion"
            value={meetingData.conclusion}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="speaker">Speaker:</label>
          <input
            type="text"
            id="speaker"
            name="speaker"
            value={meetingData.speaker}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="attendee">Attendee:</label>
          <input
            type="text"
            id="attendee"
            name="attendee"
            value={meetingData.attendee}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="meeting_location">Meeting Location:</label>
          <input
            type="text"
            id="meeting_location"
            name="meeting_location"
            value={meetingData.meeting_location}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="created">Created At:</label>
          <input
            type="datetime-local"
            id="created"
            name="created"
            value={meetingData.created ? meetingData.created.slice(0, 16) : ""}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="follow_up">Follow Up Date:</label>
          <input
            type="datetime-local"
            id="follow_up"
            name="follow_up"
            value={meetingData.follow_up ? meetingData.follow_up.slice(0, 16) : ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="assigned_to">Assigned To:</label>
          <input
            type="text"
            id="assigned_to"
            name="assigned_to"
            value={meetingData.assigned_to}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* If you need to update the lead_id, uncomment this section */}
        {/* <div className="form-group">
          <label htmlFor="lead_id">Lead ID:</label>
          <input
            type="number"
            id="lead_id"
            name="lead_id"
            value={meetingData.lead_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div> */}

        <button type="submit" className="meeting-submit-update"> {/* Updated button class */}
          Update Meeting
        </button>
      </form>
    </div>
  );
};

export default UpdateMeetingForm;