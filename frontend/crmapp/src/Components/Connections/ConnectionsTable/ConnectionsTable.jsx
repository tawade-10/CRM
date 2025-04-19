import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listLeads } from "../../Services/Services";
import "./ConnectionsTable.css";

const ConnectionsTable = () => {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredConnections, setFilteredConnections] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = () => {
    listLeads()
      .then((response) => {
        setLeads(response.data);
        setFilteredConnections(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateConnection = (id) => {
    navigate(`/connections/update-leads/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    const results = leads.filter((connection) => {
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
    setFilteredConnections(results);
    setSearchPerformed(true);
  };

  return (
    <div className="customers-container">
      <div className="customers-header">
        <p className="customers-text">Connections</p>
      </div>
      <div className="search-bar">
        <input
          type="search"
          className="form-control"
          placeholder="Search Connections"
          value={search}
          onChange={handleSearchChange}
        />
        <button
          type="button"
          className="btn btn-primary search-button"
          onClick={handleSearchClick}
        >
          <i className="fas fa-search">Search</i>
        </button>
      </div>
      <div className="table-wrapper">
        <table className="table table-bordered table-hover customers-table">
          <thead className="thead-dark">
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
            {searchPerformed ? (
              filteredConnections.length > 0 ? (
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
                    No Connections Found
                  </td>
                </tr>
              )
            ) : (
              leads.map((connection) => (
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
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConnectionsTable;
