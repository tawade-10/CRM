package com.tecstaqcrm.CRM.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tecstaqcrm.CRM.entity.MeetingRecords;

@Repository
public interface MeetingRecordsRepository extends JpaRepository<MeetingRecords, Long> {
 
}