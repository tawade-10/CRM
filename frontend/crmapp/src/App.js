import React from "react";
import "./App.css";
import Connections from "./Components/Connections/Connections";
import Customers from "./Components/Customers/CustomersMain";
import Dashboard from "./Components/Dashboard/Dashboard";
import DeletedRecords from "./Components/DeletedRecords/DeletedRecords";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LeadsDetails from "./Components/LeadsDetails/LeadsDetails";
import Login from "./Components/Login/Login";
import MasterDatabase from "./Components/MasterDatabase/MasterDatabase";
import MeetingRecords from "./Components/MeetingRecords/MeetingRecords";
import NewPassword from "./Components/PasswordReset/NewPassword/NewPassword";
import PasswordReset from "./Components/PasswordReset/PasswordResetForm/PasswordReset";
import Registration from "./Components/Registration/Registration";
import Reports from "./Components/Reports/Reports";
import SideBar from "./Components/SideBar/SideBar";
import Users from "./Components/Users/Users";
import VerifyOtp from "./Components/VerifyOtp/VerifyOtp";

const App = () => {
  return (
    <div className="App">
      <Header isDashboard={false} />
      <Login />
      <Registration />
      <SideBar />
      <Connections />
      <MeetingRecords />
      <MasterDatabase />
      <DeletedRecords />
      <PasswordReset />
      <VerifyOtp />
      <NewPassword />
      <LeadsDetails />
      <Customers />
      <Users />
      <Reports />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
