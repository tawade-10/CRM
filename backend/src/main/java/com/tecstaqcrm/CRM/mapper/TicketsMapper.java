package com.tecstaqcrm.CRM.mapper;

import com.tecstaqcrm.CRM.dto.TicketsDto;
import com.tecstaqcrm.CRM.entity.Tickets;

public class TicketsMapper {
	
	public static TicketsDto mapToTicketsDto(Tickets tickets) {
		return new TicketsDto(
				tickets.getId(),
				tickets.getCustomer(),
				tickets.getCompany(),
				tickets.getContact_name(),
				tickets.getPhone(),
				tickets.getEmail(),
				tickets.getAssign_to(),
				tickets.getTitle(),
				tickets.getDescription(),
				tickets.getTicket_type(),
				tickets.getStatus(),
				tickets.getDue_date_time(),
				tickets.getDetailed_summary(),
				tickets.getTicket_source(),
				tickets.getResolution(),
				tickets.getSupport_mode()
				);
	}
	
	public static Tickets mapToTickets(TicketsDto ticketsDto) {
		return new Tickets(
				ticketsDto.getId(),
				ticketsDto.getCustomer(),
				ticketsDto.getCompany(),
				ticketsDto.getContact_name(),
				ticketsDto.getPhone(),
				ticketsDto.getEmail(),
				ticketsDto.getAssign_to(),
				ticketsDto.getTitle(),
				ticketsDto.getDescription(),
				ticketsDto.getTicket_type(),
				ticketsDto.getStatus(),
				ticketsDto.getDue_date_time(),
				ticketsDto.getDetailed_summary(),
				ticketsDto.getTicket_source(),
				ticketsDto.getResolution(),
				ticketsDto.getSupport_mode()
				);
	}
}
