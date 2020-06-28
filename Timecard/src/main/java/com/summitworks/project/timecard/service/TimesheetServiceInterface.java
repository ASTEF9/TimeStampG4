package com.summitworks.project.timecard.service;

import java.util.List;

import com.summitworks.project.timecard.exception.TimesheetNotFoundException;
import com.summitworks.project.timecard.model.Timesheet;

public interface TimesheetServiceInterface {
	Timesheet addNewTimesheet(Timesheet timesheet);
	List<Timesheet> getAllTimesheets();
	Timesheet updateTimesheet(Timesheet timesheet, Long id) throws TimesheetNotFoundException;
	Timesheet getTimesheet(Long id) throws TimesheetNotFoundException;
	void deleteTimesheet(Long id) throws TimesheetNotFoundException;
}
