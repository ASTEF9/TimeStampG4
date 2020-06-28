package com.summitworks.project.timecard.service;
import com.summitworks.project.timecard.exception.LocationNotFoundException;
//import com.summitworks.project.timecard.model.Doctor;
import com.summitworks.project.timecard.model.Location;

import java.util.List;

import org.springframework.boot.autoconfigure.integration.IntegrationProperties.RSocket.Client;



public interface LocationServiceInterface {
	
	Location addNewLocation(Location location);
	List<Location> getAllLocations();
	Location updateLocation(Location location, Long id) throws LocationNotFoundException;
	Location getLocation(Long id) throws LocationNotFoundException;
	void deleteLocation(Long id)throws LocationNotFoundException;
}
