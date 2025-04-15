package com.tecstaqcrm.CRM.mapper;

import com.tecstaqcrm.CRM.dto.MeetingRecordsDto;
import com.tecstaqcrm.CRM.entity.MeetingRecords;

public class MeetingRecordsMapper {
	
	public static MeetingRecordsDto mapToMeetingRecordsDto(MeetingRecords meetingRecords) {
		return new MeetingRecordsDto(
				meetingRecords.getId(),
				meetingRecords.getCompany(),
				meetingRecords.getPartner_products(),
				meetingRecords.getCompany_products(),
				meetingRecords.getConclusion(),
				meetingRecords.getSpeaker(),
				meetingRecords.getAttendee(),
				meetingRecords.getMeeting_location(),
				meetingRecords.getCreated(),
				meetingRecords.getFollow_up()
				);
	}
	
	public static MeetingRecords mapToMeetingRecords(MeetingRecordsDto meetingRecordsDto) {
		return new MeetingRecords(
				meetingRecordsDto.getId(),
				meetingRecordsDto.getCompany(),
				meetingRecordsDto.getPartner_products(),
				meetingRecordsDto.getCompany_products(),
				meetingRecordsDto.getConclusion(),
				meetingRecordsDto.getSpeaker(),
				meetingRecordsDto.getAttendee(),
				meetingRecordsDto.getMeeting_location(),
				meetingRecordsDto.getCreated(),
				meetingRecordsDto.getFollow_up()
				);
	}
}
