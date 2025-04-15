import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { deleteTicket, listTickets } from "../../Services/Services";
import "./TicketsTable.css";

const listTickets = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    data: [
      //   {
      //     id: 1,
      //     title: "Issue with login",
      //     description: "Users are unable to log in to the system.",
      //     status: "Open",
      //     priority: "High",
      //     created_at: "2024-07-24",
      //     assigned_to: "John Doe",
      //   },
      //   {
      //     id: 2,
      //     title: "Forgot Password",
      //     description: "Users are unable to reset the password.",
      //     status: "In Progress",
      //     priority: "Medium",
      //     created_at: "2024-07-24",
      //     assigned_to: "Jane Smith",
      //   },
      //   {
      //     id: 3,
      //     title: "Payment Failed",
      //     description: "Some users are reporting payment failures.",
      //     status: "Closed",
      //     priority: "High",
      //     created_at: "2024-07-23",
      //     assigned_to: "Mike Johnson",
      //   },
      //   {
      //     id: 4,
      //     title: "UI Issue",
      //     description: "UI is broken",
      //     status: "Open",
      //     priority: "Low",
      //     created_at: "2024-07-23",
      //     assigned_to: "John Doe",
      //   },
      //   {
      //     id: 5,
      //     title: "API Error",
      //     description: "API is returning 500.",
      //     status: "In Progress",
      //     priority: "High",
      //     created_at: "2024-07-22",
      //     assigned_to: "Jane Smith",
      //   },
      //   {
      //     id: 6,
      //     title: "Database Connection",
      //     description: "Database connection is failing.",
      //     status: "Closed",
      //     priority: "High",
      //     created_at: "2024-07-22",
      //     assigned_to: "Mike Johnson",
      //   },
      //   {
      //     id: 7,
      //     title: "Mobile App Crash",
      //     description: "Mobile app crashes on startup",
      //     status: "Open",
      //     priority: "High",
      //     created_at: "2024-07-21",
      //     assigned_to: "John Doe",
      //   },
      //   {
      //     id: 8,
      //     title: "Email Delivery Delay",
      //     description: "Emails are delayed",
      //     status: "In Progress",
      //     priority: "Medium",
      //     created_at: "2024-07-21",
      //     assigned_to: "Jane Smith",
      //   },
      //   {
      //     id: 9,
      //     title: "Report Generation Error",
      //     description: "Reports are not generating correctly",
      //     status: "Closed",
      //     priority: "Medium",
      //     created_at: "2024-07-20",
      //     assigned_to: "Mike Johnson",
      //   },
      //   {
      //     id: 10,
      //     title: "Image Upload Issue",
      //     description: "Users cannot upload images",
      //     status: "Open",
      //     priority: "Low",
      //     created_at: "2024-07-20",
      //     assigned_to: "John Doe",
      //   },
    ],
  };
};

const deleteTicket = async (id) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Deleting ticket:", id);
  return { success: true };
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
      deleteTicket(id)
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
      ticket.assigned_to,
      ticket.due_date,
      ticket.status,
      ticket.actions
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
                <td>{ticket.client_name}</td>
                <td>{ticket.company_name}</td>
                <td>{ticket.created_by}</td>
                <td>{ticket.created_at}</td>
                <td>{ticket.assigned_to}</td>
                <td>{ticket.due_date}</td>
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
