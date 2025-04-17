package com.tecstaqcrm.CRM.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tecstaqcrm.CRM.entity.DeletedRecords;

@Repository
public interface DeletedRecordsRepository extends JpaRepository<DeletedRecords, Long> {
 
}