package com.tecstaqcrm.CRM.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tecstaqcrm.CRM.entity.Tickets;

@Repository
public interface TicketsRepository extends JpaRepository<Tickets, Long>{

}
