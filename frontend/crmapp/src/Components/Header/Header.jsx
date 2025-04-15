import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import tecstaq_logo from "../Assets/tecstaq_logo.jpg";
import "./Header.css";
import { getAllMeetings } from "../Services/Services";
import { format } from 'date-fns'; 

const Header = ({ isDashboard, isAddLeadsPage, isRegistrationPage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]); 

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const toggleNotificationModal = () => {
    setIsNotificationModalOpen(!isNotificationModalOpen);
  };

  const isTicketsPage = location.pathname.startsWith("/tickets");

    useEffect(() => {
        const fetchMeetingsAndGenerateNotifications = async () => {
            if (isAuthenticated) { 
                try {
                    const meetingsResponse = await getAllMeetings();
                    generateNotifications(meetingsResponse.data);
                } catch (error) {
                    console.error("Error fetching meetings for notifications:", error);
                    setNotifications([]);
                }
            }
        };
        fetchMeetingsAndGenerateNotifications();
    }, [isAuthenticated]); 


    const generateNotifications = (meetings) => {
        const today = format(new Date(), 'yyyy-MM-dd');
        const tomorrow = format(new Date(new Date().setDate(new Date().getDate() + 1)), 'yyyy-MM-dd');
        const generatedNotifications = [];

        meetings.forEach((meeting) => {
            const meetingDate = meeting.created ? format(new Date(meeting.created), 'yyyy-MM-dd') : null;

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
    <div className="header">
      <nav
        className={`navbar navbar-expand-lg navbar-light ${
          isDashboard ? "dashboard-navbar" : "bg-light"
        }`}
      >
        <a className="navbar-brand" href="#!">
          <img src={tecstaq_logo} alt="Tecstaq Logo" height="30" />
        </a>

        <div className="auth-links">
          {isAuthenticated ? (
            <>
              <span className="welcome-text">Welcome {}</span>
              <a href="/dashboard" className="nav-link">
                Home
              </a>
              <button className="nav-link" onClick={toggleNotificationModal}>
                Notifications
              </button>
              {isNotificationModalOpen && (
                <div className="notification-modal">
                  <div className="notification-modal-header">
                    <div className="notification-title">Notifications</div>
                    <button
                      className="close-button"
                      onClick={toggleNotificationModal}
                    >
                      &times;
                    </button>
                  </div>
                  <div className="notification-modal-body">
                    {notifications.map((notification, index) => (
                      <div key={index} className="notification-item">
                        {notification}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {!isAddLeadsPage && !isTicketsPage && (
                <a href="/add-lead" className="nav-link">
                  Add Lead
                </a>
              )}
              {isTicketsPage && (
                <a href="/add-ticket" className="nav-link">
                  Add Ticket
                </a>
              )}
              <button onClick={handleLogout} className="nav-link logout-link">
                Logout
              </button>
            </>
          ) : isRegistrationPage ? null : (
            <>
              <a href="/register" className="nav-link register-link">
                Register
              </a>
              <a href="/login" className="nav-link login-link">
                Login
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
