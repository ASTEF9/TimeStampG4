package com.summitworks.project.timecard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.summitworks.project.timecard.exception.TimesheetNotFoundException;
import com.summitworks.project.timecard.model.Timesheet;
import com.summitworks.project.timecard.repo.TimesheetRepository;

public class TimesheetService implements TimesheetServiceInterface{
	
	@Autowired
	private TimesheetRepository timesheetRepo;
	
	@Override
	public Timesheet addNewTimesheet(Timesheet timesheet) {
		// TODO Auto-generated method stub
		return timesheetRepo.save(timesheet);
	}

	@Override
	public List<Timesheet> getAllTimesheets() {
		// TODO Auto-generated method stub
		return timesheetRepo.findAll();
	}

	@Override
	public Timesheet updateTimesheet(Timesheet timesheet, Long id) throws TimesheetNotFoundException {
		Optional<Timesheet> timesheetOption = timesheetRepo.findById(id);
		if(timesheetOption.isPresent()) {
			timesheet.setId(timesheetOption.get().getId());
			timesheet.setDate(timesheetOption.get().getDate());
			timesheet.setHrsCode(timesheetOption.get().getHrsCode());
			timesheet.setHrsWorked(timesheetOption.get().getHrsWorked());
			timesheet.setLocation(timesheetOption.get().getLocation());
			timesheet.setSector(timesheetOption.get().getSector());
			timesheet.setTimeIn(timesheetOption.get().getTimeIn());
			timesheet.setTimeOut(timesheetOption.get().getTimeOut());
			return timesheetRepo.save(timesheet);
		}else {
			throw new TimesheetNotFoundException(id);
		}
	}

	@Override
	public Timesheet getTimesheet(Long id) throws TimesheetNotFoundException {
		Optional<Timesheet> timesheetOption = timesheetRepo.findById(id);
		if(timesheetOption.isPresent()) {
			return timesheetOption.get();
		}else {
			throw new TimesheetNotFoundException(id);
		}
	}

	@Override
	public void deleteTimesheet(Long id) throws TimesheetNotFoundException {
		Optional<Timesheet> timesheetOption = timesheetRepo.findById(id);
		if(timesheetOption.isPresent()) {
			timesheetRepo.deleteById(id);
		}else {
			throw new TimesheetNotFoundException(id);
		}
		
	}

}
