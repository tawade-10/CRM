import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTicket,
  getTicketById,
  updateTicket,
} from "./../../../Services/Services";
import "./AddTicketForm.css";

const AddTicketForm = () => {
  const [customer, setCustomer] = useState("");
  const [company, setCompany] = useState("");
  const [contact_name, setContact_name] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [assign_to, setAssign_to] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ticket_type, setTicket_type] = useState("");
  const [status, setStatus] = useState("");
  const [due_date_time, setDue_date_time] = useState("");
  const [detailed_summary, setDetailed_summary] = useState("");
  const [ticket_source, setTicket_source] = useState("");
  const [resolution, setResolution] = useState("");
  const [support_mode, setSupport_mode] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    customer: "",
    company: "",
    contact_name: "",
    phone: "",
    email: "",
    assign_to: "",
    title: "",
    description: "",
    ticket_type: "",
    status: "",
    due_date_time: "",
    detailed_summary: "",
    ticket_source: "",
    resolution: "",
    support_mode: "",
  });

  useEffect(() => {
    if (id) {
      getTicketById(id)
        .then((response) => {
          setCustomer(response.data.customer);
          setCompany(response.data.company);
          setContact_name(response.data.contact_name);
          setPhone(response.data.phone);
          setEmail(response.data.email);
          setAssign_to(response.data.assign_to);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setTicket_type(response.data.ticket_type);
          setStatus(response.data.status);
          setDue_date_time(response.data.due_date_time);
          setDetailed_summary(response.data.detailed_summary);
          setTicket_source(response.data.ticket_source);
          setResolution(response.data.resolution);
          setSupport_mode(response.data.support_mode);
        })
        .catch((error) => {
          console.log("Error fetching ticket:", error);
        });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "customer":
        setCustomer(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "contact_name":
        setContact_name(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "assign_to":
        setAssign_to(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "ticket_type":
        setTicket_type(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "due_date_time":
        setDue_date_time(value);
        break;
      case "detailed_summary":
        setDetailed_summary(value);
        break;
      case "ticket_source":
        setTicket_source(value);
        break;
      case "resolution":
        setResolution(value);
        break;
      case "support_mode":
        setSupport_mode(value);
        break;
      default:
        break;
    }
  };

  const saveOrUpdateTicket = async (e) => {
    e.preventDefault();

    if (validateTicketForm()) {
      const ticketData = {
        customer,
        company,
        contact_name,
        phone,
        email,
        assign_to,
        title,
        description,
        ticket_type,
        status,
        due_date_time,
        detailed_summary,
        ticket_source,
        resolution,
        support_mode,
      };

      console.log("Sending ticket data:", ticketData);

      try {
        if (id) {
          await updateTicket(id, ticketData);
          console.log("Ticket updated successfully");
        } else {
          await createTicket(ticketData);
          console.log("Ticket created successfully");
        }
        navigate("/tickets");
      } catch (error) {
        console.error("Error saving/updating ticket:", error);
      }
    }
  };

  const validateTicketForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    const requiredFields = [
      "customer",
      "company",
      "contact_name",
      "phone",
      "email",
      "assign_to",
      "title",
      "description",
      "ticket_type",
      "status",
      "due_date_time",
      "detailed_summary",
      "ticket_source",
      "resolution",
      "support_mode",
    ];

    requiredFields.forEach((field) => {
      if (!field?.trim()) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
        isValid = false;
      } else {
        newErrors[field] = "";
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="add-tickets-form-container">
      <div className="add-tickets-form-card">
        <h2 className="add-tickets-form-title">
          {id ? "Update Ticket" : "Add New Ticket"}
        </h2>
        <div className="add-tickets-form-body">
          <form onSubmit={saveOrUpdateTicket} className="tickets-form">
            <div className="tickets-form-grid">
              <div className="tickets-form-group">
                <label htmlFor="customer" className="tickets-form-label">
                  Select Customer:
                </label>
                <input
                  type="text"
                  id="customer"
                  name="customer"
                  value={customer}
                  className={`tickets-form-control ${
                    errors.customer ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                />
                {errors.customer && (
                  <div className="invalid-feedback">{errors.customer}</div>
                )}
                <br />
                <strong>Contact Information</strong>
                <hr />
              </div>
              <div className="tickets-form-group full-width">
                <label htmlFor="company" className="tickets-form-label">
                  Company:
                </label>
                <input
                  id="company"
                  name="company"
                  value={company}
                  className={`tickets-form-control ${
                    errors.company ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                />
                {errors.company && (
                  <div className="invalid-feedback">{errors.company}</div>
                )}
              </div>

              <div className="tickets-form-group">
                <label htmlFor="contact_name" className="tickets-form-label">
                  Contact Name:
                </label>
                <input
                  type="text"
                  id="contact_name"
                  name="contact_name"
                  value={contact_name}
                  className={`tickets-form-control ${
                    errors.contact_name ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                />
                {errors.contact_name && (
                  <div className="invalid-feedback">{errors.contact_name}</div>
                )}
              </div>

              <div className="tickets-form-group">
                <label htmlFor="phone" className="tickets-form-label">
                  Phone:
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={phone}
                  className={`tickets-form-control ${
                    errors.phone ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                ></input>
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              <div className="tickets-form-group">
                <label htmlFor="email" className="tickets-form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className={`tickets-form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="tickets-form-group">
                <label htmlFor="assign_to" className="tickets-form-label">
                  Assign To:
                </label>
                <input
                  type="text"
                  id="assign_to"
                  name="assign_to"
                  value={assign_to}
                  className={`tickets-form-control ${
                    errors.assign_to ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                />
                {errors.assign_to && (
                  <div className="invalid-feedback">{errors.assign_to}</div>
                )}
                <br />
                <strong>Ticket Information</strong>
                <hr />
              </div>

              <div className="tickets-form-group">
                <label htmlFor="title" className="tickets-form-label">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  className={`tickets-form-control ${
                    errors.title ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                />
                {errors.title && (
                  <div className="invalid-feedback">{errors.title}</div>
                )}
              </div>

              <div className="tickets-form-group full-width">
                <label htmlFor="description" className="tickets-form-label">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  className="tickets-form-control"
                  onChange={handleInputChange}
                />
                {errors.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
              </div>

              <div className="tickets-form-group full-width">
                <label htmlFor="ticket_type" className="tickets-form-label">
                  Ticket Type:
                </label>
                <input
                  id="ticket_type"
                  name="ticket_type"
                  value={ticket_type}
                  className="tickets-form-control"
                  onChange={handleInputChange}
                />
                {errors.ticket_type && (
                  <div className="invalid-feedback">{errors.ticket_type}</div>
                )}
              </div>

              <div className="tickets-form-group full-width">
  <label htmlFor="status" className="tickets-form-label">
    Status:
  </label>
  <select
    id="status"
    name="status"
    value={status}
    className="tickets-form-control"
    onChange={handleInputChange}
  >
    <option value="">Select Status</option>
    <option value="open">Open</option>
    <option value="in_progress">In Progress</option>
    <option value="resolved">Inactive</option>
    <option value="closed">Closed</option>
  </select>
  {errors.status && (
    <div className="invalid-feedback">{errors.status}</div>
  )}
</div>

              <div className="tickets-form-group full-width">
                <label htmlFor="due_date_time" className="tickets-form-label">
                  Due Date & Time:
                </label>
                <input
                  type="datetime-local"
                  id="due_date_time"
                  name="due_date_time"
                  value={due_date_time}
                  className="tickets-form-control"
                  onChange={handleInputChange}
                />
                {errors.due_date_time && (
                  <div className="invalid-feedback">{errors.due_date_time}</div>
                )}
                <br />
                <strong>Additional Information</strong>
                <hr />
              </div>

              <div className="tickets-form-group">
                <label
                  htmlFor="detailed_summary"
                  className="tickets-form-label"
                >
                  Detailed Summary:
                </label>
                <textarea
                  type="text"
                  id="detailed_summary"
                  name="detailed_summary"
                  value={detailed_summary}
                  className={`tickets-form-control ${
                    errors.detailed_summary ? "is-invalid" : ""
                  }`}
                  onChange={handleInputChange}
                />
                {errors.detailed_summary && (
                  <div className="invalid-feedback">
                    {errors.detailed_summary}
                  </div>
                )}
              </div>

              <div className="tickets-form-group">
                <label htmlFor="ticket_source" className="tickets-form-label">
                  Ticket Source:
                </label>
                <input
                  type="text"
                  id="ticket_source"
                  name="ticket_source"
                  value={ticket_source}
                  className="tickets-form-control"
                  onChange={handleInputChange}
                />
                {errors.ticket_source && (
                  <div className="invalid-feedback">{errors.ticket_source}</div>
                )}
              </div>

              <div className="tickets-form-group">
                <label htmlFor="resolution" className="tickets-form-label">
                  Resolution:
                </label>
                <textarea
                  type="text"
                  id="resolution"
                  name="resolution"
                  value={resolution}
                  className="tickets-form-control"
                  onChange={handleInputChange}
                />
                {errors.resolution && (
                  <div className="invalid-feedback">{errors.resolution}</div>
                )}
              </div>

              <div className="tickets-form-group">
                <label htmlFor="support_mode" className="tickets-form-label">
                  Support Mode:
                </label>
                <input
                  type="text"
                  id="support_mode"
                  name="support_mode"
                  value={support_mode}
                  className="tickets-form-control"
                  onChange={handleInputChange}
                />
                {errors.support_mode && (
                  <div className="invalid-feedback">{errors.support_mode}</div>
                )}
              </div>
            </div>
            <br />
            <button type="submit" className="tickets-submit-button">
              {id ? "Update Ticket" : "Add Ticket"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTicketForm;
