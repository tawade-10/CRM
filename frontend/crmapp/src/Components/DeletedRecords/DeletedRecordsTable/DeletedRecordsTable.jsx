import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listDeletedLeads } from "../../Services/Services";
import "./DeletedRecordsTable.css"; // Create a new CSS file

const DeletedRecordsTable = () => {
  const [deletedLeads, setDeletedLeads] = useState([]);
  const [search, setSearch] = useState("");
  const navigator = useNavigate();

  const viewDeletedLead = (id) => {
    navigator(`/deleted-leads/${id}`);
  };

  useEffect(() => {
    fetchDeletedLeads();
  }, []);

  const fetchDeletedLeads = () => {
    listDeletedLeads()
      .then((response) => {
        setDeletedLeads(response.data);
      })
      .catch((error) => {
        console.error("Error fetching deleted leads:", error);
      });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    const results = deletedLeads.filter((lead) => {
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
    setDeletedLeads(results);
  };

  return (
    <div className="deleted-leads-container">
      <div className="deleted-leads-header">
        <p className="deleted-leads-text">Deleted Records</p>
      </div>

      {/* Search Bar */}
      <div className="deleted-leads-search-bar">
        <input
          type="search"
          className="form-control"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search Deleted Records..."
        />
        <button
          type="button"
          className="btn btn-primary search-button"
          onClick={handleSearchClick}
        >
          <i className="fas fa-search">Search</i>
        </button>
      </div>

      <div className="deleted-leads-table-wrapper">
        <table className="table table-bordered table-hover deleted-leads-table">
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
              <th>Meeting Type</th>
              <th>Deleted At</th>
              {/*<th>Deleted By</th>  Removed Deleted By */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {deletedLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
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
                <td>{lead.meeting_type}</td>
                <td>
                  {lead.deletedAt
                    ? new Date(lead.deletedAt).toLocaleDateString()
                    : "N/A"}
                </td>
                {/*<td>{lead.deleted_by || "N/A"}</td> Removed deleted_by*/}
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => viewDeletedLead(lead.id)}
                  >
                    View
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

export default DeletedRecordsTable;
