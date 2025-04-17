package com.tecstaqcrm.CRM.serviceimpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.tecstaqcrm.CRM.dto.MeetingRecordsDto;
import com.tecstaqcrm.CRM.entity.MeetingRecords;
import com.tecstaqcrm.CRM.exception.ResourceNotFoundException;
import com.tecstaqcrm.CRM.mapper.MeetingRecordsMapper;
import com.tecstaqcrm.CRM.repository.MeetingRecordsRepository;
import com.tecstaqcrm.CRM.service.MeetingRecordsService;

@Service
public class MeetingRecordsServiceImpl implements MeetingRecordsService {

    private final MeetingRecordsRepository meetingRecordsRepository;

    public MeetingRecordsServiceImpl(MeetingRecordsRepository meetingRecordsRepository) {
        this.meetingRecordsRepository = meetingRecordsRepository;
    }


    public MeetingRecordsDto addMeeting(MeetingRecordsDto meetingRecordsDto) {
        MeetingRecords meetingRecords = MeetingRecordsMapper.mapToMeetingRecords(meetingRecordsDto);
        MeetingRecords savedMeetingRecords = meetingRecordsRepository.save(meetingRecords);
        return MeetingRecordsMapper.mapToMeetingRecordsDto(savedMeetingRecords);
    }


    public List<MeetingRecordsDto> getAllMeetings() {
        List<MeetingRecords> meetingRecords = meetingRecordsRepository.findAll();
        return meetingRecords.stream().map(MeetingRecordsMapper::mapToMeetingRecordsDto).collect(Collectors.toList());
    }


    public MeetingRecordsDto updatedMeeting(Long meetingId, MeetingRecordsDto updatedMeetings) {
        if (meetingId == null) {
            throw new IllegalArgumentException("Meeting ID must not be null");
        }
        MeetingRecords meetingRecord = meetingRecordsRepository.findById(meetingId).orElseThrow(
                () -> new ResourceNotFoundException("Meeting doesn't exist with given ID: " + meetingId)
        );

        meetingRecord.setCompany(updatedMeetings.getCompany());
        meetingRecord.setPartner_products(updatedMeetings.getPartner_products());
        meetingRecord.setCompany_products(updatedMeetings.getCompany_products());
        meetingRecord.setConclusion(updatedMeetings.getConclusion());
        meetingRecord.setSpeaker(updatedMeetings.getSpeaker());
        meetingRecord.setAttendee(updatedMeetings.getAttendee());
        meetingRecord.setMeeting_location(updatedMeetings.getMeeting_location());
        meetingRecord.setCreated(updatedMeetings.getCreated());
        meetingRecord.setFollow_up(updatedMeetings.getFollow_up());
        meetingRecord.setAssigned_to(updatedMeetings.getAssigned_to()); // Ensure you're setting assigned_to
        meetingRecord.setLead_id(updatedMeetings.getLead_id());       // Ensure you're setting lead_id

        MeetingRecords updatedMeetingRecordsObj = meetingRecordsRepository.save(meetingRecord);
        return MeetingRecordsMapper.mapToMeetingRecordsDto(updatedMeetingRecordsObj);
    }

    public void deleteMeeting(Long meetingId) {
        if (meetingId == null) {
            throw new IllegalArgumentException("Meeting ID must not be null");
        }
        MeetingRecords meetingRecord = meetingRecordsRepository.findById(meetingId).orElseThrow(
                () -> new ResourceNotFoundException("Meeting doesn't exist with given ID: " + meetingId)
        );
        meetingRecordsRepository.delete(meetingRecord);
    }

    public MeetingRecordsDto getMeetingById(Long meetingId) {
        if (meetingId == null) {
            throw new IllegalArgumentException("Meeting ID must not be null");
        }
        MeetingRecords meetingRecords = meetingRecordsRepository.findById(meetingId)
                .orElseThrow(() -> new ResourceNotFoundException("Meeting doesn't exist with given ID: " + meetingId));

        return MeetingRecordsMapper.mapToMeetingRecordsDto(meetingRecords);
    }

    // Implementation for the new service method
    @Override
    public List<MeetingRecordsDto> getAllMeetingsByLeadId(Long leadId) {
        Optional<MeetingRecords> meetingRecords = meetingRecordsRepository.findById(leadId);
        return meetingRecords.stream().map(MeetingRecordsMapper::mapToMeetingRecordsDto).collect(Collectors.toList());
    }
}