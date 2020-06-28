package com.summitworks.project.timecard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.summitworks.project.timecard.exception.TimesheetNotFoundException;
import com.summitworks.project.timecard.model.Timesheet;
import com.summitworks.project.timecard.service.TimesheetService;

@RestController
//@CrossOrigin(
//		allowCredentials = "true",
//		origins = "*",
//		allowedHeaders = "*",
//		methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE, RequestMethod.PUT}
//		
//		)
public class TimesheetController {
	@Autowired
	private TimesheetService tsService;
	
	@GetMapping("/timesheets")
	List<Timesheet> all(){
		return tsService.getAllTimesheets();
	}
	
	@PostMapping("/timesheets")
	Timesheet newTimesheet(@RequestBody Timesheet timesheet) throws TimesheetNotFoundException{
		return tsService.addNewTimesheet(timesheet);
	}
	@GetMapping("/timesheets/{id}")
	Timesheet getTimesheet(@PathVariable Long id)throws TimesheetNotFoundException{
		return tsService.getTimesheet(id);
	}
	@PutMapping("/timesheets/{id}")
	Timesheet updateTs(@RequestBody Timesheet timesheet,@PathVariable Long id)throws TimesheetNotFoundException{
		return tsService.updateTimesheet(timesheet, id);
	}
	@DeleteMapping("/timesheets/{id}")
	void deleteTs(@PathVariable Long id)throws TimesheetNotFoundException{
		tsService.deleteTimesheet(id);
	}
}
