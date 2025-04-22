import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MeetingRecordsTable from "../../../MeetingRecords/MeetingRecordsTable/MeetingRecordsTable"; // Reusing MeetingRecordsTable
import { getTicketById } from "../../../Services/Services";
import "./TicketDetailsForm.css";

const TicketsDetailsForm = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [meetingCount, setMeetingCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchTicketDetails(id);
    } else {
      console.error("Ticket ID not found in URL");
      navigate("/tickets");
    }
  }, [id, navigate]);

  const handleBackToTickets = () => {
    navigate("/tickets");
  };

  const fetchTicketDetails = (ticketId) => {
    getTicketById(ticketId)
      .then((response) => {
        setTicket(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ticket details:", error);
      });
  };

  const refreshMeetingRecords = useCallback(() => {
    setMeetingCount((prevCount) => prevCount + 1);
  }, []);

  const handleAddMeetingClick = () => {
    navigate(`/add-meeting?ticketId=${id}`); // Different query parameter
  };

  if (!ticket) {
    return <div>Loading ticket details...</div>;
  }

  return (
    <div className="tickets-details-page">
      <div className="tickets-details-container">
        <div className="tickets-details-text">Ticket Details</div>
        <hr />
        <div className="tickets-details-content">
          <div className="detail-item">
            <span className="detail-label">ID:</span>
            <span className="detail-value">{ticket.id}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Customer:</span>
            <span className="detail-value">{ticket.customer}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Company:</span>
            <span className="detail-value">{ticket.company}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Created By:</span>
            <span className="detail-value">{ticket.created_by}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Created At:</span>
            <span className="detail-value">
              {ticket.created_at
                ? new Date(ticket.created_at).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Assigned To:</span>
            <span className="detail-value">{ticket.assign_to}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Due Date:</span>
            <span className="detail-value">
              {ticket.due_date_time
                ? new Date(ticket.due_date_time).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Status:</span>
            <span className="detail-value">{ticket.status}</span>
          </div>
          {/* Add other ticket details based on your API response */}
          <button
            type="button"
            className="btn btn-secondary back-button"
            onClick={handleBackToTickets}
          >
            Back to Tickets
          </button>
        </div>
      </div>
      {/* <div>
        <MeetingRecordsTable
          showAddMeetingButton={true}
          ticketId={id} // Pass ticketId instead of leadId
          onMeetingAdded={refreshMeetingRecords}
          updateMeetingCount={() => {}}
          key={meetingCount}
        />
      </div> */}
    </div>
  );
};

export default TicketsDetailsForm;
