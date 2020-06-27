package com.summitworks.project.timecard.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summitworks.project.timecard.exception.DoctorNotFoundException;
import com.summitworks.project.timecard.model.Doctor;
import com.summitworks.project.timecard.model.User;
import com.summitworks.project.timecard.repo.DoctorRepository;

@Service
public class DoctorService implements DoctorServiceInterface{
	
	
		
		@Autowired
		private DoctorRepository doctorRepo;
		


		@Override
		public Doctor addNewDoctor(Doctor doctor) {
			return doctorRepo.save(doctor);
		}

		@Override
		public Doctor updateDoctor(Doctor doctor, Long id) throws DoctorNotFoundException {
			Optional<Doctor> doctorOption = doctorRepo.findById(id);
			if(doctorOption.isPresent()) {
				doctor.setId(doctorOption.get().getId());
				doctor.setFirstName(doctorOption.get().getFirstName());
				doctor.setLastName(doctorOption.get().getLastName());
				doctor.setFileNumber(doctorOption.get().getFileNumber());
				return doctorRepo.save(doctor);
			}else {
				throw new DoctorNotFoundException(id);
			}
		}

		@Override
		public Doctor getDoctor(Long id) throws DoctorNotFoundException {
			Optional<Doctor> doctorOption = doctorRepo.findById(id);
			if(doctorOption.isPresent()) {
				return doctorOption.get();
			}else{
	            throw new DoctorNotFoundException(id);
	        }
		}

		@Override
		public void deleteDoctor(Long id) throws DoctorNotFoundException {
			Optional<Doctor> doctorOption = doctorRepo.findById(id);
			if(doctorOption.isPresent()) {
				doctorRepo.deleteById(id);
			}else{
	            throw new DoctorNotFoundException(id);
	        }
			
		}

		@Override
		public List<Doctor> getAllDoctors() {
			return doctorRepo.findAll();
		}
}
