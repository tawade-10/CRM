package com.tecstaqcrm.CRM.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.tecstaqcrm.CRM.dto.LeadsDto;
import com.tecstaqcrm.CRM.entity.Leads;
import com.tecstaqcrm.CRM.exception.ResourceNotFoundException;
import com.tecstaqcrm.CRM.mapper.LeadsMapper;
import com.tecstaqcrm.CRM.repository.LeadsRepository;
import com.tecstaqcrm.CRM.service.LeadsService;

@Service
public class LeadsServiceImpl implements LeadsService {

    private final LeadsRepository leadsRepository;

    public LeadsServiceImpl(LeadsRepository leadsRepository) {
        this.leadsRepository = leadsRepository;
    }

    public LeadsDto addLead(LeadsDto leadsDto) {
        Leads leads = LeadsMapper.mapToLeads(leadsDto);
        Leads savedLeads = leadsRepository.save(leads);
        return LeadsMapper.mapToLeadsDto(savedLeads);
    }

    @Override
    public LeadsDto getLeadsById(Long leadsId) {
        if (leadsId == null) {
            throw new IllegalArgumentException("Lead ID must not be null");
        }
        Leads leads = leadsRepository.findById(leadsId)
                .orElseThrow(() -> new ResourceNotFoundException("Lead doesn't exist with given ID: " + leadsId));

        return LeadsMapper.mapToLeadsDto(leads);
    }

    @Override
    public List<LeadsDto> getAllLeads() {
        List<Leads> leads = leadsRepository.findAll();
        return leads.stream().map(LeadsMapper::mapToLeadsDto).collect(Collectors.toList());
    }

    @Override
    public LeadsDto updateLeads(Long leadsId, LeadsDto updatedLeads) {
        if (leadsId == null) {
            throw new IllegalArgumentException("Lead ID must not be null");
        }
        Leads lead = leadsRepository.findById(leadsId).orElseThrow(
                () -> new ResourceNotFoundException("Lead doesn't exist with given ID: " + leadsId)
        );

        lead.setClient_name(updatedLeads.getClient_name());
        lead.setCompany(updatedLeads.getCompany());
        lead.setDesignation(updatedLeads.getDesignation());
        lead.setAssigned_from(updatedLeads.getAssigned_from());
        lead.setAssigned_to(updatedLeads.getAssigned_to());
        lead.setPriority(updatedLeads.getPriority());
        lead.setStatus(updatedLeads.getStatus());
        lead.setCreated(updatedLeads.getCreated());
        lead.setFollow_up(updatedLeads.getFollow_up());
        lead.setMeeting_type(updatedLeads.getMeeting_type());

        Leads updatedLeadsObj = leadsRepository.save(lead);
        return LeadsMapper.mapToLeadsDto(updatedLeadsObj);
    }

    @Override
    public void deleteLeads(Long leadsId) {
        if (leadsId == null) {
            throw new IllegalArgumentException("Lead ID must not be null");
        }
        Leads lead = leadsRepository.findById(leadsId).orElseThrow(
                () -> new ResourceNotFoundException("Lead doesn't exist with given ID: " + leadsId)
        );
        leadsRepository.delete(lead);
    }
}
