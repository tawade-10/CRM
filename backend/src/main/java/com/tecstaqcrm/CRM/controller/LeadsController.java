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

import com.tecstaqcrm.CRM.dto.LeadsDto;
import com.tecstaqcrm.CRM.service.LeadsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/leads")
public class LeadsController {

	@Autowired
    private LeadsService leadsService; 

    @PostMapping
    public ResponseEntity<LeadsDto> addLead(@RequestBody LeadsDto leadsDto){
        LeadsDto savedLeads = leadsService.addLead(leadsDto);
        return new ResponseEntity<>(savedLeads, HttpStatus.CREATED);
    }
    
    @GetMapping("{id}")
    public ResponseEntity<LeadsDto> getLeadsById(@PathVariable("id") Long leadsId){
        LeadsDto leadsDto = leadsService.getLeadsById(leadsId);
        return ResponseEntity.ok(leadsDto);
    }
    
    @GetMapping
    public ResponseEntity<List<LeadsDto>> getAllLeads(){
        List<LeadsDto> leads = leadsService.getAllLeads();
        return ResponseEntity.ok(leads);
    }
    
    @PutMapping("{id}")
    public ResponseEntity<LeadsDto> updateLeads(@PathVariable("id") Long leadsId, @RequestBody LeadsDto updatedLeads) {
        LeadsDto leadsDto = leadsService.updateLeads(leadsId, updatedLeads);
        return ResponseEntity.ok(leadsDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLeads(@PathVariable("id") Long leadsId) {
        leadsService.deleteLeads(leadsId);
        return ResponseEntity.ok("Lead Deleted Successfully");
    }
    
}