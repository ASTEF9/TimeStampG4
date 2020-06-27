package com.summitworks.project.timecard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.summitworks.project.timecard.exception.LocationNotFoundException;
import com.summitworks.project.timecard.exception.UserNotFoundException;
import com.summitworks.project.timecard.model.Location;
import com.summitworks.project.timecard.model.User;
import com.summitworks.project.timecard.service.LocationService;

@RestController
//@CrossOrigin(
//		allowCredentials = "true",
//		origins = "*",
//		allowedHeaders = "*",
//		methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE, RequestMethod.PUT}
//		
//		)
public class LocationController {
	
	@Autowired
	private LocationService locationService;
	
	@GetMapping("/locations")
	List<Location> all(){
		return locationService.getAllLocations();
	}
	@PostMapping("/locations")
	Location newLocation(@RequestBody Location location) {
		return locationService.addNewLocation(location);
	}
	@GetMapping("/locations/{id}")
	Location getLocation(@PathVariable Long id) throws LocationNotFoundException{
		return locationService.getLocation(id);
	}
	@PutMapping("/locations/{id}")
	Location updateUser(@RequestBody Location location,@PathVariable Long id) throws LocationNotFoundException{
		return locationService.updateLocation(location, id);
	}
	@DeleteMapping("/locations/{id}")
	void deleteUser(@PathVariable Long id) throws LocationNotFoundException{
		locationService.deleteLocation(id);
	}
}
