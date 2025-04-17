package com.tecstaqcrm.CRM.mapper;

import com.tecstaqcrm.CRM.dto.DeletedRecordsDto;
import com.tecstaqcrm.CRM.entity.DeletedRecords;

public class DeletedRecordsMapper {
	
	public static DeletedRecordsDto mapToDeletedRecordsDto(DeletedRecords deletedRecords) {
		return new DeletedRecordsDto(
				deletedRecords.getId(),
				deletedRecords.getClient_name(),
				deletedRecords.getCompany(),
				deletedRecords.getDesignation(),
				deletedRecords.getAssigned_from(),
				deletedRecords.getAssigned_to(),
				deletedRecords.getPriority(),
				deletedRecords.getStatus(),
				deletedRecords.getMeeting_type(),
				deletedRecords.getDeleted_at(),
				deletedRecords.getDeleted_by(),
				deletedRecords.getActions()
				);
	}
	
	public static DeletedRecords mapToDeletedRecords(DeletedRecordsDto deletedRecordsDto) {
		return new DeletedRecords(
				deletedRecordsDto.getId(),
				deletedRecordsDto.getClient_name(),
				deletedRecordsDto.getCompany(),
				deletedRecordsDto.getDesignation(),
				deletedRecordsDto.getAssigned_from(),
				deletedRecordsDto.getAssigned_to(),
				deletedRecordsDto.getPriority(),
				deletedRecordsDto.getStatus(),
				deletedRecordsDto.getMeeting_type(),
				deletedRecordsDto.getDeleted_at(),
				deletedRecordsDto.getDeleted_by(),
				deletedRecordsDto.getActions()
				);
	}
}
