package com.tecstaqcrm.CRM.service;

import java.util.List;

import com.tecstaqcrm.CRM.dto.LeadsDto;

public interface LeadsService {
	LeadsDto addLead(LeadsDto leadsDto);
	
	LeadsDto getLeadsById(Long leadsId);
	
	List<LeadsDto> getAllLeads();
	
	LeadsDto updateLeads(Long leadsId, LeadsDto updatedLeads);
	
	void deleteLeads(Long leadsId);
	
}
