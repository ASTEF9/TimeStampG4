package com.summitworks.project.timecard.service;
import com.summitworks.project.timecard.exception.LocationNotFoundException;
//import com.summitworks.project.timecard.model.Doctor;
import com.summitworks.project.timecard.model.Location;

import java.util.List;



public interface LocationServiceInterface {
	Location addNewLocation(Location location);
	List<Location> getAllLocations();
	Location updateLocation(Location location, Long id) throws LocationNotFoundException;
	Location getLocation(Long id) throws LocationNotFoundException;
	void deleteLocation(Long id)throws LocationNotFoundException;
}
