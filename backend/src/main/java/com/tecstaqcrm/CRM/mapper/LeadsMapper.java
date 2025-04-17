package com.tecstaqcrm.CRM.mapper;

import com.tecstaqcrm.CRM.dto.LeadsDto;
import com.tecstaqcrm.CRM.entity.Leads;

public class LeadsMapper {
	
	public static LeadsDto mapToLeadsDto(Leads leads) {
		return new LeadsDto(
				leads.getId(),
				leads.getClient_name(),
				leads.getCompany(),
				leads.getDesignation(),
				leads.getAssigned_from(),
				leads.getAssigned_to(),
				leads.getPriority(),
				leads.getStatus(),
				leads.getCreated(),
				leads.getFollow_up(),
				leads.getMeeting_type(),
				leads.getPhone(),
				leads.getEmail(),
				leads.getCity(),
				leads.getAddress(),
				leads.getValue(),
				leads.getLead_source(),
				leads.getComments(),
				leads.getEvent_details()
				);
	}
	
	public static Leads mapToLeads(LeadsDto leadsDto) {
		return new Leads(
				leadsDto.getId(),
				leadsDto.getClient_name(),
				leadsDto.getCompany(),
				leadsDto.getDesignation(),
				leadsDto.getAssigned_from(),
				leadsDto.getAssigned_to(),
				leadsDto.getPriority(),
				leadsDto.getStatus(),
				leadsDto.getCreated(),
				leadsDto.getFollow_up(),
				leadsDto.getMeeting_type(),
				leadsDto.getPhone(),
				leadsDto.getEmail(),
				leadsDto.getCity(),
				leadsDto.getAddress(),
				leadsDto.getValue(),
				leadsDto.getLead_source(),
				leadsDto.getComments(),
				leadsDto.getEvent_details()
				);
	}
}
