package com.summitworks.project.timecard.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summitworks.project.timecard.model.Doctor;

public interface DoctorRespository extends JpaRepository<Doctor,Long>{

}
