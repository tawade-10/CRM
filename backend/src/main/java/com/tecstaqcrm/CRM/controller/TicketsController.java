package com.tecstaqcrm.CRM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecstaqcrm.CRM.dto.TicketsDto;
import com.tecstaqcrm.CRM.service.TicketsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/tickets")
public class TicketsController {

	@Autowired
    private TicketsService ticketsService; 

    @PostMapping
    public ResponseEntity<TicketsDto> addTickets(@RequestBody TicketsDto ticketsDto){
        TicketsDto savedTickets = ticketsService.addTickets(ticketsDto);
        return new ResponseEntity<>(savedTickets, HttpStatus.CREATED);
    }
    
    @GetMapping("{id}")
    public ResponseEntity<TicketsDto> getTicketsById(@PathVariable("id") Long ticketsId){
        TicketsDto ticketsDto = ticketsService.getTicketsById(ticketsId);
        return ResponseEntity.ok(ticketsDto);
    }
    
    @GetMapping
    public ResponseEntity<List<TicketsDto>> getAllTickets(){
        List<TicketsDto> tickets = ticketsService.getAllTickets();
        return ResponseEntity.ok(tickets);
    }
    
    @PutMapping("{id}")
    public ResponseEntity<TicketsDto> updateTickets(@PathVariable("id") Long ticketsId, @RequestBody TicketsDto updatedTickets) {
        TicketsDto ticketsDto = ticketsService.updateTickets(ticketsId, updatedTickets);
        return ResponseEntity.ok(ticketsDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTickets(@PathVariable("id") Long ticketsId) {
        ticketsService.deleteTickets(ticketsId);
        return ResponseEntity.ok("Ticket Deleted Successfully");
    }
    
}