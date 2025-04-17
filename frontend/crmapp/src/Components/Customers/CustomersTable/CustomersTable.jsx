import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listLeads } from "../../Services/Services"; // Assuming this fetches customer data
import "./CustomersTable.css";

const CustomersTable = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const navigator = useNavigate();

  function UpdateCustomer(id) {
    navigator(`/update-leads/${id}`);
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    listLeads() // Assuming this service fetches customer data
      .then((response) => setCustomers(response.data))
      .catch(console.error);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCustomers = customers.filter((customer) => {
    const searchFields = [
      customer.client_name,
      customer.company,
      customer.designation,
      customer.phone,
      customer.email,
      customer.city,
      customer.assigned_to,
      customer.status,
      customer.created,
      String(customer.id),
    ];
    return searchFields.some((field) =>
      String(field).toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="customers-container">
      <div className="customers-header">
        <p className="customers-text">Customers</p>
      </div>

      {/* Search Bar */}
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
        <table className="table table-bordered table-hover customers-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Company</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.client_name}</td>
                  <td>{customer.company}</td>
                  <td>{customer.designation}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.city}</td>
                  <td>{customer.assigned_to}</td>
                  <td>{customer.status}</td>
                  <td>
                    {customer.created
                      ? new Date(customer.created).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => UpdateCustomer(customer.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTable;
