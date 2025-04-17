package com.tecstaqcrm.CRM.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tecstaqcrm.CRM.entity.Leads;

@Repository
public interface LeadsRepository extends JpaRepository<Leads, Long>{

}
