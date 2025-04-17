import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TicketsTable.css";

const TICKETS_API_BASE_URL = "http://localhost:8080/api/tickets";

const listTickets = async () => {
  try {
    const response = await axios.get(TICKETS_API_BASE_URL);
    return response;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

const deleteTicketApi = async (id) => {
  try {
    const response = await axios.delete(`${TICKETS_API_BASE_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting ticket:", error);
    throw error;
  }
};

const TicketsTable = () => {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const navigator = useNavigate();

  function UpdateTicket(id) {
    navigator(`/update-ticket/${id}`);
  }

  const handleDeleteTicket = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      deleteTicketApi(id)
        .then((response) => {
          console.log("Ticket deleted:", response);
          fetchTickets();
        })
        .catch((error) => {
          console.error("Error deleting ticket:", error);
          alert("Failed to delete ticket.");
        });
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await listTickets();
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredTickets = tickets.filter((ticket) => {
    const searchFields = [
      String(ticket.id),
      ticket.client_name,
      ticket.company_name,
      ticket.created_by,
      ticket.created_at,
      ticket.assign_to,
      ticket.due_date_time,
      ticket.status,
    ];
    return searchFields.some((field) =>
      String(field).toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="tickets-container">
      <div className="tickets-header">
        <p className="tickets-text">Tickets</p>
        <div className="priority-buttons">
          <button className="btn btn-danger">All</button>
          <button className="btn btn-warning">In Progress</button>
          <button className="btn btn-success">Inactive</button>
          <button className="btn btn-dark">Closed</button>
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
        <table className="table table-bordered table-hover tickets-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Company Name</th>
              <th>Created By</th>
              <th>Created At</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  <a href={`/ticket-details/${ticket.id}`}>{ticket.id}</a>
                </td>
                <td>{ticket.customer}</td>
                <td>{ticket.company}</td>
                <td>{ticket.created_by}</td>
                <td>{ticket.due_date}</td>
                <td>{ticket.assign_to}</td>
                <td>{ticket.due_date_time}</td>
                <td>{ticket.status}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => UpdateTicket(ticket.id)}
                  >
                    Update
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

export default TicketsTable;
