package com.summitworks.project.timecard.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summitworks.project.timecard.model.Location;

public interface LocationRepository extends JpaRepository<Location,Long>{

}
