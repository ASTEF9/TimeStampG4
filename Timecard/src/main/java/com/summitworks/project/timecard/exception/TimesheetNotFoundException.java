package com.summitworks.project.timecard.exception;

public class TimesheetNotFoundException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public TimesheetNotFoundException(Long id) {
		super("Timesheet not found for timesheet id: "+id);
	}
}
