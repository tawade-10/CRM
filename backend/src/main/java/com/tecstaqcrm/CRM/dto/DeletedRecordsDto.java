package com.tecstaqcrm.CRM.dto;

import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeletedRecordsDto {
    private Long id;
    private String client_name;
    private String company;
    private String designation;
    private String assigned_from;
    private String assigned_to;
    private String priority;
    private String status;
    private String meeting_type;
    private LocalDate deleted_at;
    private String deleted_by;
    private String actions;

    public DeletedRecordsDto() {
    }

	public DeletedRecordsDto(Long id, String client_name, String company, String designation,
			String assigned_from, String assigned_to, String priority, String status, String meeting_type,
			LocalDate deleted_at, String deleted_by, String actions) {
		super();
		this.id = id;
		this.client_name = client_name;
		this.company = company;
		this.designation = designation;
		this.assigned_from = assigned_from;
		this.assigned_to = assigned_to;
		this.priority = priority;
		this.status = status;
		this.meeting_type = meeting_type;
		this.deleted_at = deleted_at;
		this.deleted_by = deleted_by;
		this.actions = actions;
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

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMeeting_type() {
		return meeting_type;
	}

	public void setMeeting_type(String meeting_type) {
		this.meeting_type = meeting_type;
	}

	public LocalDate getDeleted_at() {
		return deleted_at;
	}

	public void setDeleted_at(LocalDate deleted_at) {
		this.deleted_at = deleted_at;
	}

	public String getDeleted_by() {
		return deleted_by;
	}

	public void setDeleted_by(String deleted_by) {
		this.deleted_by = deleted_by;
	}

	public String getActions() {
		return actions;
	}

	public void setActions(String actions) {
		this.actions = actions;
	}

	
   
}