package com.summitworks.project.timecard.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Location {
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;
	@Column
	private String location;
	@Column
	private String sector;
	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Location(Long id, String location, String sector) {
		super();
		this.id = id;
		this.location = location;
		this.sector = sector;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	
}
