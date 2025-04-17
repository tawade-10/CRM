package com.tecstaqcrm.CRM.service;

import java.util.List;

import com.tecstaqcrm.CRM.dto.MeetingRecordsDto;

public interface MeetingRecordsService {

    MeetingRecordsDto addMeeting(MeetingRecordsDto meetingRecordsDto);

    MeetingRecordsDto getMeetingById(Long meetingId);

    List<MeetingRecordsDto> getAllMeetings();

    MeetingRecordsDto updatedMeeting(Long meetingId, MeetingRecordsDto updatedMeetings);

    void deleteMeeting(Long meetingId);

    List<MeetingRecordsDto> getAllMeetingsByLeadId(Long leadId);
}