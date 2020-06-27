package com.summitworks.project.timecard.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summitworks.project.timecard.model.Doctor;
import com.summitworks.project.timecard.model.Location;

public interface LocationRepository extends JpaRepository<Location,Long>{
	
	List<Location> findByLocation(String location);

}
