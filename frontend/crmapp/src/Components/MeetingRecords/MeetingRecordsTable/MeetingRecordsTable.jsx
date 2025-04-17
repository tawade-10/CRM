import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMeetings } from "../../Services/Services"; // Import the service to fetch meetings
import "./MeetingRecordsTable.css"; // Assuming you have some shared styles

const MeetingRecordsTable = ({
  showAddMeetingButton,
  leadId,
  updateMeetingCount,
  onMeetingAdded,
}) => {
  const [meetingRecords, setMeetingRecords] = useState([]);
  const [search, setSearch] = useState("");
  const navigator = useNavigate();
  const [notifications, setNotifications] = useState([]); 

  function handleUpdateRecord(id) {
    navigator(`/update-meeting/${id}`);
  }

  const handleViewLead = (id) => {
    navigator(`/lead-details/${id}`);
  };

  useEffect(() => {
    fetchMeetingRecords();
  }, [leadId, onMeetingAdded]);

  const fetchMeetingRecords = async () => {
    try {
      const response = await getAllMeetings();
      let filteredMeetings = response.data;
      if (leadId) {
        filteredMeetings = response.data.filter(
          (record) => record.lead_id === parseInt(leadId)
        );
      }
      setMeetingRecords(filteredMeetings);
      if (updateMeetingCount) {
        updateMeetingCount(filteredMeetings.length);
      }
      generateNotifications(filteredMeetings);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredRecords = meetingRecords.filter((record) => {
    const searchFields = [
      record.company,
      record.partner_products,
      record.company_products,
      record.conclusion,
      record.speaker,
      record.attendee,
      record.meeting_location,
      record.created,
      record.follow_up,
      String(record.id),
      record.assigned_to,
    ];
    return searchFields.some((field) =>
      String(field).toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleAddMeeting = () => {
    navigator(`/add-meeting?leadId=${leadId}`);
  };

  const generateNotifications = (meetings) => {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0];
    const generatedNotifications = [];

    meetings.forEach((meeting) => {
      const meetingDate = meeting.created
        ? meeting.created.split("T")[0]
        : null;

      if (meetingDate === today) {
        generatedNotifications.push(
          `Meeting scheduled today with ${meeting.company} at ${meeting.meeting_location}.`
        );
      } else if (meetingDate === tomorrow) {
        generatedNotifications.push(
          `Meeting scheduled tomorrow with ${meeting.company} at ${meeting.meeting_location}.`
        );
      }
    });
    setNotifications(generatedNotifications);
  };

  return (
    <div className="meeting-records-container">
      <div className="meeting-records-header">
        <p className="meeting-records-text">Meeting Records</p>
      </div>

      {/* Search Bar */}
      <div className="records-search-bar">
        <input
          type="search"
          className="form-control records-search-input"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="button" className="btn btn-primary records-search-button">
          <i className="fas fa-search">Search</i>
        </button>
      </div>

      <div className="records-table-wrapper">
        <table className="table table-bordered table-hover meeting-records-table">
          <thead className="thead-dark records-thead">
            <tr>
              <th>ID</th>
              <th>Company</th>
              <th>Partner Products</th>
              <th>Company Products</th>
              <th>Conclusion</th>
              <th>Speaker</th>
              <th>Attendee</th>
              <th>Meeting Location</th>
              <th>Created At</th>
              <th>Follow Up</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="scrollable-records-tbody">
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.company}</td>
                <td>{record.partner_products}</td>
                <td>{record.company_products}</td>
                <td>{record.conclusion}</td>
                <td>{record.speaker}</td>
                <td>{record.attendee}</td>
                <td>{record.meeting_location}</td>
                <td>
                  {record.created
                    ? new Date(record.created).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  {record.follow_up
                    ? new Date(record.follow_up).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>{record.assigned_to}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm records-update-button"
                    onClick={() => handleUpdateRecord(record.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-warning btn-sm records-view-lead-button ml-2"
                    onClick={() => handleViewLead(record.id)}
                  >
                    View Lead
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddMeetingButton && (
        <button className="meeting-submit" onClick={handleAddMeeting}>
          Add Meeting
        </button>
      )}

      {/* {notifications.length > 0 && (
        <div className="notification-modal">
          <div className="notification-modal-header">
            <h2 className="notification-modal-title">Notifications</h2>
          </div>
          <div className="notification-modal-body">
            {notifications.map((notification, index) => (
              <div key={index} className="notification-item">
                {notification}
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MeetingRecordsTable;
