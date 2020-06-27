package com.summitworks.project.timecard.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.summitworks.project.timecard.model.Doctor;


public interface DoctorRepository extends JpaRepository<Doctor,Long>{
	List<Doctor> findByFileNumber(String fileNumber);
}
