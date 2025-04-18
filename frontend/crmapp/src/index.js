import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Connections from "./Components/Connections/ConnectionsMain/ConnectionsMain";
import Customers from "./Components/Customers/CustomersMain/CustomersMain";
import Dashboard from "./Components/Dashboard/Dashboard";
import LeadsDetails from "./Components/Leads/LeadsDetails/LeadsDetailsMain/LeadsDetailsMain";
import Leads from "./Components/Leads/LeadsMain/Leads";
import Registration from "./Components/Registration/Registration";
import Reports from "./Components/Reports/Reports";
import SideBar from "./Components/SideBar/SideBar";
import Tickets from "./Components/Tickets/TicketsMain/TicketsMain";
// import UpdateLeads from "./Components/UpdateLeads/UpdateLeads";
import AddMeeting from "./Components/AddMeeting/AddMeetingMain/AddMeetingMain";
import DeletedRecords from "./Components/DeletedRecords/DeletedRecordsMain/DeletedRecordsMain";
import EditProfile from "./Components/EditProfile/EditProfileMain/EditProfileMain";
import AddLeadsMain from "./Components/Leads/AddLeadsMain/AddLeadsMain";
import UpdateLeads from "./Components/Leads/UpdateLeadsMain/UpdateLeadsMain";
import MasterDatabase from "./Components/MasterDatabase/MasterDatabaseMain/MasterDatabaseMain";
import MeetingRecords from "./Components/MeetingRecords/MeetingRecordsMain/MeetingRecordsMain";
import UpdateMeeting from "./Components/MeetingRecords/UpdateMeeting/UpdateMeetingMain/UpdateMeetingMain";
import NewPassword from "./Components/NewPassword/NewPasswordMain/NewPasswordMain";
import PasswordReset from "./Components/PasswordReset/PasswordResetMain/PasswordResetMain";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import AddTicketMain from "./Components/Tickets/AddTicket/AddTicketMain/AddTicketMain";
import VerifyOtp from "./Components/VerifyOtp/VerifyOtp";
import Entry from "./Entry";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Entry />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot" element={<PasswordReset />} />
        <Route path="/forgot/send-otp" element={<VerifyOtp />} />
        <Route path="/reset-password/new" element={<NewPassword />} />
        <Route path="/" element={<Entry />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/sidebar"
          element={
            <ProtectedRoutes>
              <SideBar />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/leads"
          element={
            <ProtectedRoutes>
              <Leads />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/add-lead"
          element={
            <ProtectedRoutes>
              <AddLeadsMain />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/update-leads/:id"
          element={
            <ProtectedRoutes>
              <UpdateLeads />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/lead-details/:id"
          element={
            <ProtectedRoutes>
              <LeadsDetails />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/add-meeting"
          element={
            <ProtectedRoutes>
              <AddMeeting />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/tickets"
          element={
            <ProtectedRoutes>
              <Tickets />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/add-ticket"
          element={
            <ProtectedRoutes>
              <AddTicketMain />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/update-ticket/:id"
          element={
            <ProtectedRoutes>
              <AddTicketMain />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRoutes>
              <Customers />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoutes>
              <Reports />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/connections"
          element={
            <ProtectedRoutes>
              <Connections />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/meeting-records"
          element={
            <ProtectedRoutes>
              <MeetingRecords />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/master-database"
          element={
            <ProtectedRoutes>
              <MasterDatabase />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/update-meeting/:id"
          element={
            <ProtectedRoutes>
              <UpdateMeeting />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/leads-details/:id"
          element={
            <ProtectedRoutes>
              <LeadsDetails />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoutes>
              <EditProfile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/deleted-records/"
          element={
            <ProtectedRoutes>
              <DeletedRecords />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
