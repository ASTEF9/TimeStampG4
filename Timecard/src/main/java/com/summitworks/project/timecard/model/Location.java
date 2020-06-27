package com.summitworks.project.timecard.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="location")
public class Location {
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;
	@Column
	private String location;
	@Column
	private String sector;
	
	@OneToOne
	@JoinColumn(name="id", referencedColumnName="id" )
	private Doctor doctor;
	
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
	
	public Doctor getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
//	@Override
//	public String toString() {
//		return "Location [id=" + id + ", location=" + location + ", sector=" + sector + ", doctor=" + doctor + "]";
//	}
}
