import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createLead, getLead, UpdateLeads } from "../../Services/Services";
import "./UpdateLeadsForm.css";

const UpdateLeadsForm = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    company: "",
    designation: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    status: "",
    priority: "",
    assigned_from: "",
    assigned_to: "",
    follow_up: "",
    created: "",
    meeting_type: "",
    value:"",
    lead_source:""
  });

  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const refetch = location.state?.refetch;

  useEffect(() => {
    if (id) {
      getLead(id)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching lead:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.client_name) {
      newErrors.client_name = "Client Name is required";
      isValid = false;
    }

    if (!formData.company) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    if (!formData.designation) {
      newErrors.designation = "Designation is required";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.city) {
      newErrors.city = "City is required";
      isValid = false;
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (!formData.status) {
      newErrors.status = "Status is required";
      isValid = false;
    }

    if (!formData.priority) {
      newErrors.priority = "Priority is required";
      isValid = false;
    }

    if (!formData.assigned_from) {
      newErrors.assigned_from = "Assigned From is required";
      isValid = false;
    }

    if (!formData.assigned_to) {
      newErrors.assigned_to = "Assigned To is required";
      isValid = false;
    }

    if (!formData.follow_up) {
      newErrors.follow_up = "Follow Up is required";
      isValid = false;
    }

    if (!formData.created) {
      newErrors.created = "Created is required";
      isValid = false;
    }

    if (!formData.meeting_type) {
      newErrors.meeting_type = "Meeting Type is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const apiCall = id ? UpdateLeads(id, formData) : createLead(formData);

      apiCall
        .then(() => {
          if (refetch) {
            refetch();
          }
          navigate("/leads");
        })
        .catch((error) => {
          console.error("Error saving lead:", error);
        });
    }
  };

  return (
    <div className="update-leads-container">
      <div className="row">
        <div className="card">
          <h2 className="text-center">{id ? "Update Lead" : "Add Lead"}</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {Object.entries(formData).map(([key, value]) => (
                <div className="form-group mb-2" key={key}>
                  <label className="form-label">
                    {key.replace(/_/g, " ").toUpperCase()}:
                  </label>
                  <input
                    type={
                      key === "created" || key === "follow_up" ? "date" : "text"
                    }
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className={`form-control ${
                      errors[key] ? "is-invalid" : ""
                    }`}
                  />
                  {errors[key] && (
                    <div className="invalid-feedback">{errors[key]}</div>
                  )}
                </div>
              ))}
              <button type="submit" className="btn btn-success">
                {id ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLeadsForm;
