package com.summitworks.project.timecard.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summitworks.project.timecard.model.Timesheet;

public interface TimesheetRepository extends JpaRepository<Timesheet,Long>{

}
