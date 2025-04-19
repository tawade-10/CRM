import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { getAllMeetings, listLeads, getAllTickets } from "../Services/Services";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";

const Dashboard = () => {
  const [totalLeads, setTotalLeads] = useState(0);
  const [recentLeads, setRecentLeads] = useState(0);
  const [meetingsToday, setMeetingsToday] = useState(0);
  const [upcomingMeetings, setUpcomingMeetings] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leadsResponse = await listLeads();
        setTotalLeads(leadsResponse.data.length);

        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const recentLeadsCount = leadsResponse.data.filter((lead) => {
          const leadCreatedDate = new Date(lead.created);
          return (
            leadCreatedDate.toDateString() === today.toDateString() ||
            leadCreatedDate.toDateString() === yesterday.toDateString()
          );
        }).length;
        setRecentLeads(recentLeadsCount);

        const meetingsResponse = await getAllMeetings();
        const todayString = today.toISOString().split("T")[0];
        let meetingsTodayCount = 0;
        let upcomingMeetingsCount = 0;
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const tomorrowString = tomorrow.toISOString().split("T")[0];

        meetingsResponse.data.forEach((meeting) => {
          const meetingDate = meeting.created ? meeting.created.split("T")[0] : null;
          if (meetingDate === todayString) {
            meetingsTodayCount++;
          } else if (meetingDate === tomorrowString) {
            upcomingMeetingsCount++;
          }
        });
        setMeetingsToday(meetingsTodayCount);
        setUpcomingMeetings(upcomingMeetingsCount);

        const ticketsResponse = await getAllTickets();
        if (ticketsResponse && ticketsResponse.data) {
          setTotalTickets(ticketsResponse.data.length);
        } else {
          setTotalTickets(0);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMeetingsToday(0);
        setTotalLeads(0);
        setRecentLeads(0);
        setUpcomingMeetings(0);
        setTotalTickets(0);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="right-content">
          <div className="username">
            <p>Shubham's Dashboard</p>
          </div>
          <div className="dashboardBoxWrapper d-flex">
            <div className="dashboardBox1">
              <p className="heading-text">Meetings Today</p>
              <p className="numbers">{meetingsToday}</p>
              <p className="description">
                {meetingsToday === 0
                  ? "No Meetings Scheduled for Today"
                  : `${meetingsToday} Meeting${meetingsToday !== 1 ? "s" : ""} Scheduled Today`}
              </p>
            </div>
            <div className="dashboardBox2">
              <p className="heading-text">Reminders</p>
              <p className="numbers">{upcomingMeetings}</p>
              <p className="description">
                {upcomingMeetings === 0
                  ? "No Upcoming Meetings for Tomorrow"
                  : `${upcomingMeetings} Meeting${upcomingMeetings !== 1 ? "s" : ""} Scheduled for Tomorrow`}
              </p>
            </div>
            <div className="dashboardBox3">
              <p className="heading-text">Overdue Loads</p>
              <p className="numbers">0</p>
              <p className="description">No Overdue Leads</p>
            </div>
            <div className="dashboardBox4">
              <p className="heading-text">My Total Leads</p>
              <p className="numbers">{totalLeads}</p>
              <p className="description">No Leads available</p>
            </div>
            <div className="dashboardBox5">
              <p className="heading-text">My Total Clients</p>
              <p className="numbers">0</p>
              <p className="description">No Clients Available</p>
            </div>
            <div className="dashboardBox6">
              <p className="heading-text">My Open Tickets</p>
              <p className="numbers">{totalTickets}</p> {/* Display total tickets here */}
              <p className="description">
                {totalTickets === 0
                  ? "No Tickets available"
                  : `${totalTickets} Ticket${totalTickets !== 1 ? "s" : ""} in Total`}
              </p>
            </div>
            <div className="dashboardBox7">
              <p className="heading-text">My Dead Leads</p>
              <p className="numbers">0</p>
              <p className="description">No Dead Leads available</p>
            </div>
            <div className="dashboardBox8">
              <p className="heading-text">Recent Leads Added (My Leads)</p>
              <p className="numbers">{recentLeads}</p>
              <p className="description">
                {recentLeads === 0
                  ? "No Recent Leads available"
                  : `${recentLeads} Recent Lead${recentLeads !== 1 ? "s" : ""}`}
              </p>
            </div>
            <div className="dashboardBox9">
              <p className="heading-text">Recent Tickets (My Tickets)</p>
              <p className="numbers">0</p>
              <p className="description">No Recent Tickets available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Assuming you have a service function like this in your Services/Services.js
// export const getAllTickets = async () => {
//   try {
//     const response = await fetch('/api/tickets'); // Replace with your actual API endpoint
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return { data };
//   } catch (error) {
//     console.error("Error fetching tickets:", error);
//     return { data: [] };
//   }
// };

export default Dashboard;