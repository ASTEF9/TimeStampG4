package com.summitworks.project.timecard.model;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="timehseet")
public class Timesheet {
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;
	@Column
	private String date;
	@Column
	private String sector;
	
	@OneToOne
	@JoinColumn(name="id", referencedColumnName="id" )
	private Location location;
	@Column
	private String timeIn;
	@Column
	private String timeOut;
	@Column
	private String hrsCode;
	@Column
	private String hrsWorked;
	public Timesheet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Timesheet(Long id, String date, String sector, Location location, String timeIn, String timeOut, String hrsCode,
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
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
	public String getTimeIn() {
		return timeIn;
	}
	public void setTimeIn(String timeIn) {
		this.timeIn = timeIn;
	}
	public String getTimeOut() {
		return timeOut;
	}
	public void setTimeOut(String timeOut) {
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
