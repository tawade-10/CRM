package com.tecstaqcrm.CRM.entity;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="leads")
public class Leads {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String client_name;
    private String company;
    private String designation;
    private String assigned_from;
    private String assigned_to;
    private String priority;
    private String status;
    private LocalDate created;
    private LocalDate follow_up;
    private String meeting_type;
    private String phone;
    private String email;
    private String city;
    private String address;
    private Long value;
    private String comments;
    private String lead_source;
    private String event_details;

    public Leads() {
    }

    public Leads(Long id, String client_name, String company, String designation, String assigned_from, String assigned_to,
            String priority, String status, LocalDate created, LocalDate follow_up, String meeting_type,
            String phone, String email, String city, String address, Long value,String lead_source, String comments, String event_details) {
this.id = id;
this.client_name = client_name;
this.company = company;
this.designation = designation;
this.assigned_from = assigned_from;
this.assigned_to = assigned_to;
this.priority = priority;
this.status = status;
this.created = created;
this.follow_up = follow_up;
this.meeting_type = meeting_type;
this.phone = phone;
this.email = email;
this.city = city;
this.address = address;
this.value = value;
this.lead_source = lead_source;
this.comments = comments;
this.event_details = event_details;
}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getClient_name() {
		return client_name;
	}

	public void setClient_name(String client_name) {
		this.client_name = client_name;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public Long getValue() {
		return value;
	}

	public void setValue(Long value) {
		this.value = value;
	}

	public String getAssigned_from() {
		return assigned_from;
	}

	public void setAssigned_from(String assigned_from) {
		this.assigned_from = assigned_from;
	}

	public String getAssigned_to() {
		return assigned_to;
	}

	public void setAssigned_to(String assigned_to) {
		this.assigned_to = assigned_to;
	}

	public String getLead_source() {
		return lead_source;
	}

	public void setLead_source(String lead_source) {
		this.lead_source = lead_source;
	}

	public LocalDate getFollow_up() {
		return follow_up;
	}

	public void setFollow_up(LocalDate follow_up) {
		this.follow_up = follow_up;
	}

	public LocalDate getCreated() {
		return created;
	}

	public void setCreated(LocalDate created) {
		this.created = created;
	}

	public String getMeeting_type() {
		return meeting_type;
	}

	public void setMeeting_type(String meeting_type) {
		this.meeting_type = meeting_type;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getEvent_details() {
		return event_details;
	}

	public void setEvent_details(String event_details) {
		this.event_details = event_details;
	}    
	
	
}