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

import com.summitworks.project.timecard.exception.DoctorNotFoundException;
import com.summitworks.project.timecard.exception.UserNotFoundException;
import com.summitworks.project.timecard.model.Doctor;
import com.summitworks.project.timecard.service.DoctorService;

@RestController
public class DoctorController {
	
		
		@Autowired
		private DoctorService doctorService;
		
		@GetMapping("/doctors")
		List<Doctor> all(){
			return doctorService.getAllDoctors();
		}
		@PostMapping("/doctors")
		Doctor newDoctor(@RequestBody Doctor doctor) {
			return doctorService.addNewDoctor(doctor);
		}
		@GetMapping("/doctors/{id}")
		Doctor getDoctor(@PathVariable Long id) throws DoctorNotFoundException{
			return doctorService.getDoctor(id);
		}
		@PutMapping("/doctors/{id}")
		Doctor updateUser(@RequestBody Doctor doctor,@PathVariable Long id) throws DoctorNotFoundException{
			return doctorService.updateDoctor(doctor, id);
		}
		@DeleteMapping("/doctors/{id}")
		void deleteUser(@PathVariable Long id) throws DoctorNotFoundException{
			doctorService.deleteDoctor(id);
		}
	}

