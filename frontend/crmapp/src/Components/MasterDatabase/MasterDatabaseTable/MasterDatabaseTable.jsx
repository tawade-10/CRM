import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteLeads, listLeads } from "../../Services/Services";
import "./MasterDatabaseTable.css";

const MasterDatabaseTable = () => {
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState("");
  const navigator = useNavigate();

  function updateMasterDataItem(id) {
    navigator(`/master-database/update-master-data/${id}`);
  }

  const handleDeleteMasterDataItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteLeads(id)
        .then((response) => {
          console.log("Master data item deleted:", response.data);
          fetchMasterData();
        })
        .catch((error) => {
          console.error("Error deleting master data item:", error);
          alert("Failed to delete item.");
        });
    }
  };

  useEffect(() => {
    fetchMasterData();
  }, []);

  const fetchMasterData = () => {
    listLeads()
      .then((response) => {
        setMasterData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  
  const filteredMasterData = masterData.filter((item) => {
    const searchFields = [
      item.client_name,
      item.company,
      item.phone,
      item.assigned_to,
      item.follow_up,
      String(item.id),
    ];
    return searchFields.some((field) =>
      String(field).toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="master-db-container">
      <div className="master-db-header">
        <p className="master-db-text">Master Database</p>
      </div>

      {/* Search Bar */}
      <div className="master-db-search-bar">
        <input
          type="search"
          className="form-control master-db-search-input"
          value={search}
          onChange={handleSearchChange}
        />
        <button
          type="button"
          className="btn btn-primary master-db-search-button"
        >
          <i className="fas fa-search">Search</i>
        </button>
      </div>

      <div className="master-db-table-wrapper">
        <table className="table table-bordered table-hover master-db-table">
          <thead className="thead-dark master-db-thead">
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Company</th>
              <th>Phone</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Follow Up</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="scrollable-master-db-tbody">
            {filteredMasterData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.client_name}</td>
                <td>{item.company}</td>
                <td>{item.phone}</td>
                <td>{item.assigned_to}</td>
                <td>
                  {item.follow_up
                    ? new Date(item.follow_up).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>{item.meeting_type}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm master-db-update-button"
                    onClick={() => updateMasterDataItem(item.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm master-db-delete-button ml-2"
                    onClick={() => handleDeleteMasterDataItem(item.id)}
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

export default MasterDatabaseTable;
