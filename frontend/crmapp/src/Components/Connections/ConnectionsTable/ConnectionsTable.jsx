import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listLeads } from "../../Services/Services";
import "./ConnectionsTable.css";

const ConnectionsTable = () => {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = () => {
    listLeads()
      .then((response) => {
        setLeads(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateConnection = (id) => {
    navigate(`/update-leads/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredConnections = leads.filter((connection) => {
    const searchFields = [
      connection.client_name,
      connection.company,
      connection.phone,
      connection.email,
      connection.follow_up,
      connection.comments,
      String(connection.id),
    ];
    return searchFields.some((field) =>
      String(field).toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="customers-container">
      {" "}
      {/* Use customers-container */}
      <div className="customers-header">
        <p className="customers-text">Connections</p> {/* Use customers-text */}
      </div>
      {/* Search Bar */}
      <div className="search-bar">
        {" "}
        {/* Use search-bar */}
        <input
          type="search"
          className="form-control"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="button" className="btn btn-primary search-button">
          {" "}
          {/* Use search-button */}
          <i className="fas fa-search">Search</i>
        </button>
      </div>
      <div className="table-wrapper">
        {" "}
        {/* Use table-wrapper */}
        <table className="table table-bordered table-hover customers-table">
          {" "}
          {/* Use customers-table */}
          <thead className="thead-dark">
            {" "}
            {/* Use thead-dark */}
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Company</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Follow Up</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {" "}
            {/* Use scrollable-tbody */}
            {filteredConnections.length > 0 ? (
              filteredConnections.map((connection) => (
                <tr key={connection.id}>
                  <td>{connection.id}</td>
                  <td>{connection.client_name}</td>
                  <td>{connection.company}</td>
                  <td>{connection.phone}</td>
                  <td>{connection.email}</td>
                  <td>{connection.follow_up}</td>
                  <td>{connection.comments}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => updateConnection(connection.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  {" "}
                  {/* Use text-center */}
                  No Connections Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConnectionsTable;
