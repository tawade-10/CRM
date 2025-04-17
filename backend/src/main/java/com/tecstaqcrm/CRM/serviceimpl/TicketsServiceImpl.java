package com.tecstaqcrm.CRM.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.tecstaqcrm.CRM.dto.TicketsDto;
import com.tecstaqcrm.CRM.entity.Tickets;
import com.tecstaqcrm.CRM.exception.ResourceNotFoundException;
import com.tecstaqcrm.CRM.mapper.TicketsMapper;
import com.tecstaqcrm.CRM.repository.TicketsRepository;
import com.tecstaqcrm.CRM.service.TicketsService;

@Service
public class TicketsServiceImpl implements TicketsService {

    private final TicketsRepository ticketsRepository;

    public TicketsServiceImpl(TicketsRepository ticketsRepository) {
        this.ticketsRepository = ticketsRepository;
    }


    @Override
    public TicketsDto getTicketsById(Long ticketsId) {
        if (ticketsId == null) {
            throw new IllegalArgumentException("Ticket ID must not be null");
        }
        Tickets tickets = ticketsRepository.findById(ticketsId)
                .orElseThrow(() -> new ResourceNotFoundException("Ticket doesn't exist with given ID: " + ticketsId));

        return TicketsMapper.mapToTicketsDto(tickets);
    }

    @Override
    public List<TicketsDto> getAllTickets() {
        List<Tickets> tickets = ticketsRepository.findAll();
        return tickets.stream().map(TicketsMapper::mapToTicketsDto).collect(Collectors.toList());
    }

    @Override
    public TicketsDto updateTickets(Long ticketsId, TicketsDto updatedTickets) {
        if (ticketsId == null) {
            throw new IllegalArgumentException("Ticket ID must not be null");
        }
        Tickets ticket = ticketsRepository.findById(ticketsId).orElseThrow(
                () -> new ResourceNotFoundException("Ticket doesn't exist with given ID: " + ticketsId)
        );

        ticket.setCustomer(updatedTickets.getCustomer());
        ticket.setCompany(updatedTickets.getCompany());
        ticket.setContact_name(updatedTickets.getContact_name());
        ticket.setPhone(updatedTickets.getPhone());
        ticket.setEmail(updatedTickets.getEmail());
        ticket.setAssign_to(updatedTickets.getAssign_to());
        ticket.setTitle(updatedTickets.getTitle());
        ticket.setDescription(updatedTickets.getDescription());
        ticket.setTicket_type(updatedTickets.getTicket_type());
        ticket.setStatus(updatedTickets.getStatus());
        ticket.setDue_date_time(updatedTickets.getDue_date_time());
        ticket.setDetailed_summary(updatedTickets.getDetailed_summary());
        ticket.setTicket_source(updatedTickets.getTicket_source());
        ticket.setResolution(updatedTickets.getResolution());
        ticket.setSupport_mode(updatedTickets.getSupport_mode());

        Tickets updatedTicketsObj = ticketsRepository.save(ticket);
        return TicketsMapper.mapToTicketsDto(updatedTicketsObj);
    }

    @Override
    public void deleteTickets(Long ticketsId) {
        if (ticketsId == null) {
            throw new IllegalArgumentException("Ticket ID must not be null");
        }
        Tickets ticket = ticketsRepository.findById(ticketsId).orElseThrow(
                () -> new ResourceNotFoundException("Ticket doesn't exist with given ID: " + ticketsId)
        );
        ticketsRepository.delete(ticket);
    }


	@Override
	public TicketsDto addTickets(TicketsDto ticketsDto) {
		 Tickets tickets = TicketsMapper.mapToTickets(ticketsDto);
	        Tickets savedTickets = ticketsRepository.save(tickets);
	        return TicketsMapper.mapToTicketsDto(savedTickets);
	}
}
