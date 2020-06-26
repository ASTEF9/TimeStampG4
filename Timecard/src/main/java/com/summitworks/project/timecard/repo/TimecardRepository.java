package com.summitworks.project.timecard.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summitworks.project.timecard.model.Timecard;

public interface TimecardRepository extends JpaRepository<Timecard,Long>{

}
