package com.summitworks.project.timecard.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summitworks.project.timecard.model.Location;
import com.summitworks.project.timecard.model.Timesheet;

public interface TimesheetRepository extends JpaRepository<Timesheet,Long>{
	List<Location> findBySector(String sector);
}
