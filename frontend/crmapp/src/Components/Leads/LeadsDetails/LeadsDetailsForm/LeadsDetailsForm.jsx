import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MeetingRecordsTable from "../../../MeetingRecords/MeetingRecordsTable/MeetingRecordsTable";
import { getLead } from "../../../Services/Services";
import "./LeadsDetailsForm.css";

const LeadsDetailsForm = () => {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [meetingCount, setMeetingCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchLeadDetails(id);
    } else {
      console.error("Lead ID not found in URL");
      navigate("/leads");
    }
  }, [id, navigate]);

  const handleBackToLeads = () => {
    navigate("/leads");
  };

  const fetchLeadDetails = (leadId) => {
    getLead(leadId)
      .then((response) => {
        setLead(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lead details:", error);
      });
  };

  const refreshMeetingRecords = useCallback(() => {
    setMeetingCount((prevCount) => prevCount + 1);
  }, []);

  const handleAddMeetingClick = () => {
    navigate(`/add-meeting?leadId=${id}`); 
  };

  if (!lead) {
    return <div>Loading lead details...</div>;
  }

  return (
    <div className="leads-details-page">
      <div className="leads-details-container">
        <div className="leads-details-text">Leads Record</div>
        <hr />
        <div className="leads-details-content">
          <div className="detail-item">
            <span className="detail-label">ID:</span>
            <span className="detail-value">{lead.id}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Client Name:</span>
            <span className="detail-value">{lead.client_name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Company:</span>
            <span className="detail-value">{lead.company}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Designation:</span>
            <span className="detail-value">{lead.designation}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Assigned From:</span>
            <span className="detail-value">{lead.assigned_from}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Assigned To:</span>
            <span className="detail-value">{lead.assigned_to}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Priority:</span>
            <span className="detail-value">{lead.priority}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Status:</span>
            <span className="detail-value">{lead.status}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Created:</span>
            <span className="detail-value">
              {lead.created
                ? new Date(lead.created).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Follow Up:</span>
            <span className="detail-value">
              {lead.follow_up
                ? new Date(lead.follow_up).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Meeting Type:</span>
            <span className="detail-value">{lead.meeting_type}</span>
          </div>
          <button
            type="button"
            className="btn btn-secondary back-button"
            onClick={handleBackToLeads}
          >
            Back to Leads
          </button>
        </div>
      </div>
      <div>
        <MeetingRecordsTable
          showAddMeetingButton={true}
          leadId={id}
          onMeetingAdded={refreshMeetingRecords}
          updateMeetingCount={() => {}}
          key={meetingCount}
        />
      </div>
    </div>
  );
};

export default LeadsDetailsForm;
