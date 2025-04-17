package com.tecstaqcrm.CRM.dto;

import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MeetingRecordsDto {
    private Long id;
    private String company;
    private String partner_products;
    private String company_products;
    private String conclusion;
    private String speaker;
    private String attendee;
    private String meeting_location;
    private LocalDate created;
    private LocalDate follow_up;
    private String assigned_to;
    private Long lead_id;

    public MeetingRecordsDto() {
    }

	public MeetingRecordsDto(Long id, String company, String partner_products, String company_products,
			String conclusion, String speaker, String attendee, String meeting_location, LocalDate created,
			LocalDate follow_up, String assigned_to, Long lead_id) {
		super();
		this.id = id;
		this.company = company;
		this.partner_products = partner_products;
		this.company_products = company_products;
		this.conclusion = conclusion;
		this.speaker = speaker;
		this.attendee = attendee;
		this.meeting_location = meeting_location;
		this.created = created;
		this.follow_up = follow_up;
		this.assigned_to = assigned_to;
		this.lead_id = lead_id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getPartner_products() {
		return partner_products;
	}

	public void setPartner_products(String partner_products) {
		this.partner_products = partner_products;
	}

	public String getCompany_products() {
		return company_products;
	}

	public void setCompany_products(String company_products) {
		this.company_products = company_products;
	}

	public String getConclusion() {
		return conclusion;
	}

	public void setConclusion(String conclusion) {
		this.conclusion = conclusion;
	}

	public String getSpeaker() {
		return speaker;
	}

	public void setSpeaker(String speaker) {
		this.speaker = speaker;
	}

	public String getAttendee() {
		return attendee;
	}

	public void setAttendee(String attendee) {
		this.attendee = attendee;
	}

	public String getMeeting_location() {
		return meeting_location;
	}

	public void setMeeting_location(String meeting_location) {
		this.meeting_location = meeting_location;
	}

	public LocalDate getCreated() {
		return created;
	}

	public void setCreated(LocalDate created) {
		this.created = created;
	}

	public LocalDate getFollow_up() {
		return follow_up;
	}

	public void setFollow_up(LocalDate follow_up) {
		this.follow_up = follow_up;
	}

	public String getAssigned_to() {
		return assigned_to;
	}

	public void setAssigned_to(String assigned_to) {
		this.assigned_to = assigned_to;
	}

	public Long getLead_id() {
		return lead_id;
	}

	public void setLead_id(Long lead_id) {
		this.lead_id = lead_id;
	}

}