package com.tecstaqcrm.CRM.service;

import java.util.List;

import com.tecstaqcrm.CRM.dto.TicketsDto;

public interface TicketsService {
	TicketsDto addTickets(TicketsDto ticketsDto);
	
	TicketsDto getTicketsById(Long ticketsId);
	
	List<TicketsDto> getAllTickets();
	
	TicketsDto updateTickets(Long ticketsId, TicketsDto updatedTickets);
	
	void deleteTickets(Long ticketsId);
	
}
