import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { listLeads } from "../Services/Services";
import SideBar from "../SideBar/SideBar";
import "./Reports.css"; // Make sure to use the modified Reports.css from the previous response

const Reports = () => {
  const [leads, setLeads] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAssigned, setSelectedAssigned] = useState("");
  const [totalLeads, setTotalLeads] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    listLeads()
      .then((response) => setLeads(response.data))
      .catch(console.error);

    listLeads()
      .then((response) => setCustomers(response.data))
      .catch(console.error);
  }, []);
  useEffect(() => {
    listLeads()
      .then((response) => {
        setTotalLeads(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="reports-page">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="reports-content">
          <div className="reports-wrapper">
            <h2 className="reports-title">Reports</h2>

            {/* Dropdown Filters */}
            <div className="filters">
              <div className="filter-group">
                <label htmlFor="period-filter">Select Period</label>
                <select
                  id="period-filter"
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                >
                  <option value="">All Time</option>
                  <option value="lastWeek">Last Week</option>
                  <option value="lastMonth">Last Month</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="status-filter">Select Status</label>
                <select
                  id="status-filter"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="">All Status</option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="assigned-filter">Assigned To</label>
                <select
                  id="assigned-filter"
                  value={selectedAssigned}
                  onChange={(e) => setSelectedAssigned(e.target.value)}
                >
                  <option value="">All Assigned</option>
                  <option value="john">John Doe</option>
                  <option value="jane">Jane Smith</option>
                </select>
              </div>
            </div>

            <div className="dropdown-containers">
              <div className="dropdown-container">
                <div className="btn btn-danger">Open</div>
                <div className="open-container">
                  <p className="customers-text">Leads</p>
                  <p className="customers-number">{totalLeads}</p>
                </div>
              </div>
              <div className="dropdown-container">
                <div className="btn btn-warning">Overdue</div>
                <div className="open-container">
                  <p className="customers-text">Overdues</p>
                  <p className="customers-number">0</p>
                </div>
              </div>
              <div className="dropdown-container">
                <div className="btn btn-success">Result</div>
                <div className="open-container">
                  <p className="customers-text">Converted Customers</p>
                  <p className="customers-number">0</p>
                </div>
              </div>
            </div>
          </div>

          <div className="table-container">
            <h3 className="table-title">Leads</h3>
            <div className="connections-table-scroll-wrapper">
              <table className="connections-table">
                <thead className="table thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Client Name</th>
                    <th>Company</th>
                    <th>Created At</th>
                    <th>Follow Up</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.length > 0 ? (
                    leads.map((lead) => (
                      <tr key={lead.id}>
                        <td>{lead.id}</td>
                        <td>{lead.client_name}</td>
                        <td>{lead.company}</td>
                        <td>{lead.created}</td>
                        <td>{lead.follow_up}</td>
                        <td>{lead.assigned_to}</td>
                        <td>{lead.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="connections-no-data">
                        No Data Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-container">
            <h3 className="table-title">Customers</h3>
            <div className="connections-table-scroll-wrapper">
              <table className="connections-table">
                <thead className="table thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Client Name</th>
                    <th>Company</th>
                    <th>Created At</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.length > 0 ? (
                    customers.map((client) => (
                      <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.client_name}</td>
                        <td>{client.company}</td>
                        <td>{client.created}</td>
                        <td>{client.assigned_to}</td>
                        <td>{client.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="connections-no-data">
                        No Data Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
