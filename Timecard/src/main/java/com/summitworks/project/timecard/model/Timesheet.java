package com.summitworks.project.timecard.model;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Timesheet {
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;
	@Column
	private Date date;
	@Column
	private String sector;
	@Column
	private Location location;
	@Column
	private Time timeIn;
	@Column
	private Time timeOut;
	@Column
	private String hrsCode;
	@Column
	private String hrsWorked;
	public Timesheet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Timesheet(Long id, Date date, String sector, Location location, Time timeIn, Time timeOut, String hrsCode,
			String hrsWorked) {
		super();
		this.id = id;
		this.date = date;
		this.sector = sector;
		this.location = location;
		this.timeIn = timeIn;
		this.timeOut = timeOut;
		this.hrsCode = hrsCode;
		this.hrsWorked = hrsWorked;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	public Time getTimeIn() {
		return timeIn;
	}
	public void setTimeIn(Time timeIn) {
		this.timeIn = timeIn;
	}
	public Time getTimeOut() {
		return timeOut;
	}
	public void setTimeOut(Time timeOut) {
		this.timeOut = timeOut;
	}
	public String getHrsCode() {
		return hrsCode;
	}
	public void setHrsCode(String hrsCode) {
		this.hrsCode = hrsCode;
	}
	public String getHrsWorked() {
		return hrsWorked;
	}
	public void setHrsWorked(String hrsWorked) {
		this.hrsWorked = hrsWorked;
	}
	
}
