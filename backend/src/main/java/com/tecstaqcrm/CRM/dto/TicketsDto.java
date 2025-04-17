package com.tecstaqcrm.CRM.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TicketsDto {
	 private Long id;

	    private String customer;
	    private String company;
	    private String contact_name;
	    private Long phone;
	    private String email;
	    private String assign_to;
	    private String title;
	    private String description;
	    private String ticket_type;
	    private String status;
	    private LocalDate due_date_time;
	    private String detailed_summary;
	    private String ticket_source;
	    private String resolution;
	    private String support_mode;
	    
	    public TicketsDto() {
	    }

		public TicketsDto(Long id,String customer, String company, String contact_name, Long phone, String email,
				String assign_to, String title, String description, String ticket_type, String status, LocalDate due_date_time, String detailed_summary,
				String ticket_source,String resolution, String support_mode) {
			super();
			this.id = id;
			this.customer = customer;
			this.company = company;
			this.contact_name = contact_name;
			this.phone = phone;
			this.email = email;
			this.assign_to = assign_to;
			this.title = title;
			this.description = description;
			this.ticket_type = ticket_type;
			this.status = status;
			this.due_date_time = due_date_time;
			this.detailed_summary = detailed_summary;
			this.ticket_source = ticket_source;
			this.resolution = resolution;
			this.support_mode = support_mode;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getCustomer() {
			return customer;
		}

		public void setCustomer(String customer) {
			this.customer = customer;
		}

		public String getCompany() {
			return company;
		}

		public void setCompany(String company) {
			this.company = company;
		}

		public String getContact_name() {
			return contact_name;
		}

		public void setContact_name(String contact_name) {
			this.contact_name = contact_name;
		}

		public Long getPhone() {
			return phone;
		}

		public void setPhone(Long phone) {
			this.phone = phone;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getAssign_to() {
			return assign_to;
		}

		public void setAssign_to(String assign_to) {
			this.assign_to = assign_to;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String getTicket_type() {
			return ticket_type;
		}

		public void setTicket_type(String ticket_type) {
			this.ticket_type = ticket_type;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public LocalDate getDue_date_time() {
			return due_date_time;
		}

		public void setDue_date_time(LocalDate due_date_time) {
			this.due_date_time = due_date_time;
		}

		public String getDetailed_summary() {
			return detailed_summary;
		}

		public void setDetailed_summary(String detailed_summary) {
			this.detailed_summary = detailed_summary;
		}

		public String getTicket_source() {
			return ticket_source;
		}

		public void setTicket_source(String ticket_source) {
			this.ticket_source = ticket_source;
		}

		public String getResolution() {
			return resolution;
		}

		public void setResolution(String resolution) {
			this.resolution = resolution;
		}

		public String getSupport_mode() {
			return support_mode;
		}

		public void setSupport_mode(String support_mode) {
			this.support_mode = support_mode;
		}	
   
}