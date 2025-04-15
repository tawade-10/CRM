import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteLeads, listLeads } from "../../Services/Services";
import "./LeadsTable.css";

const LeadsTable = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const navigator = useNavigate();

  function UpdateLeads(id) {
    navigator(`/update-leads/${id}`);
  }

  const handleDeleteLead = (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      deleteLeads(id)
        .then((response) => {
          console.log("Lead deleted:", response.data);
          fetchLeads();
        })
        .catch((error) => {
          console.error("Error deleting lead:", error);
          alert("Failed to delete lead.");
        });
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = () => {
    listLeads()
      .then((response) => {
        setLeads(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredLeads = leads.filter((lead) => {
    const searchFields = [
      lead.client_name,
      lead.company,
      lead.designation,
      lead.assigned_from,
      lead.assigned_to,
      lead.priority,
      lead.status,
      lead.meeting_type,
      String(lead.id),
    ];
    return searchFields.some((field) =>
      String(field).toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="leads-container">
      <div className="leads-header">
        <p className="leads-text">Leads</p>
        <div className="priority-buttons">
          <button className="btn btn-danger">High</button>
          <button className="btn btn-warning">Mid</button>
          <button className="btn btn-success">Low</button>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="search"
          className="form-control"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="button" className="btn btn-primary search-button">
          <i className="fas fa-search">Search</i>
        </button>
      </div>

      <div className="table-wrapper">
        <table className="table table-bordered table-hover leads-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Company</th>
              <th>Designation</th>
              <th>Assigned From</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
              <th>Follow Up</th>
              <th>Meeting Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td>
                  <a href={`/lead-details/${lead.id}`}>{lead.id}</a>
                </td>
                <td>{lead.client_name}</td>
                <td>{lead.company}</td>
                <td>{lead.designation}</td>
                <td>{lead.assigned_from}</td>
                <td>{lead.assigned_to}</td>
                <td>
                  {lead.priority ? (
                    lead.priority.toLowerCase() === "high" ? (
                      <button className="btn btn-danger">
                        {lead.priority}
                      </button>
                    ) : lead.priority.toLowerCase() === "mid" ? (
                      <button className="btn btn-warning">
                        {lead.priority}
                      </button>
                    ) : lead.priority.toLowerCase() === "low" ? (
                      <button className="btn btn-success">
                        {lead.priority}
                      </button>
                    ) : (
                      lead.priority
                    )
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>{lead.status}</td>
                <td>
                  {lead.created
                    ? new Date(lead.created).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  {lead.follow_up
                    ? new Date(lead.follow_up).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>{lead.meeting_type}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => UpdateLeads(lead.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm ml-2"
                    onClick={() => handleDeleteLead(lead.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
