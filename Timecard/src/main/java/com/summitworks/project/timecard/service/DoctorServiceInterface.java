package com.summitworks.project.timecard.service;

import java.util.List;

import com.summitworks.project.timecard.exception.DoctorNotFoundException;

import com.summitworks.project.timecard.model.Doctor;
import com.summitworks.project.timecard.model.User;

public interface DoctorServiceInterface {
	Doctor addNewDoctor(Doctor doctor);
	List<Doctor> getAllDoctors();
	Doctor updateDoctor(Doctor doctor, Long id) throws DoctorNotFoundException;
	Doctor getDoctor(Long id) throws DoctorNotFoundException;
	void deleteDoctor(Long id)throws DoctorNotFoundException;
}
