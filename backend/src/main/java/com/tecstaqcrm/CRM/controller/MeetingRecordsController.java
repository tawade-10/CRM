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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tecstaqcrm.CRM.dto.MeetingRecordsDto;
import com.tecstaqcrm.CRM.service.MeetingRecordsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/meeting_records")
public class MeetingRecordsController {

    @Autowired
    private MeetingRecordsService meetingRecordsService;

    @PostMapping
    public ResponseEntity<MeetingRecordsDto> addMeeting(@RequestBody MeetingRecordsDto meetingRecordsDto) {
        MeetingRecordsDto savedMeetings = meetingRecordsService.addMeeting(meetingRecordsDto);
        return new ResponseEntity<>(savedMeetings, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<MeetingRecordsDto> getMeetingById(@PathVariable("id") Long meetingId) {
        MeetingRecordsDto meetingRecordsDto = meetingRecordsService.getMeetingById(meetingId);
        return ResponseEntity.ok(meetingRecordsDto);
    }

    @GetMapping
    public ResponseEntity<List<MeetingRecordsDto>> getAllMeetings(
            @RequestParam(value = "leadId", required = false) Long leadId) {
        List<MeetingRecordsDto> meetingRecords;
        if (leadId != null) {
            meetingRecords = meetingRecordsService.getAllMeetingsByLeadId(leadId);
        } else {
            meetingRecords = meetingRecordsService.getAllMeetings();
        }
        return ResponseEntity.ok(meetingRecords);
    }

    @PutMapping("{id}")
    public ResponseEntity<MeetingRecordsDto> updatedMeeting(@PathVariable("id") Long meetingId, @RequestBody MeetingRecordsDto updatedMeeting) {
        MeetingRecordsDto meetingRecordsDto = meetingRecordsService.updatedMeeting(meetingId, updatedMeeting);
        return ResponseEntity.ok(meetingRecordsDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMeeting(@PathVariable("id") Long meetingId) {
        meetingRecordsService.deleteMeeting(meetingId);
        return ResponseEntity.ok("Meeting Deleted Successfully");
    }
}