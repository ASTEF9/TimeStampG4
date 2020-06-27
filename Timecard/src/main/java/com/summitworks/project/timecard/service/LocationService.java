package com.summitworks.project.timecard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.summitworks.project.timecard.exception.DoctorNotFoundException;
import com.summitworks.project.timecard.exception.LocationNotFoundException;
import com.summitworks.project.timecard.model.Doctor;
import com.summitworks.project.timecard.model.Location;

import com.summitworks.project.timecard.repo.LocationRepository;

public class LocationService implements LocationServiceInterface{
	
	@Autowired
	private LocationRepository locationRepo;

	@Override
	public Location addNewLocation(Location location) {
		
		return locationRepo.save(location);
	}

	@Override
	public List<Location> getAllLocations() {
		
		return locationRepo.findAll();
	}

	@Override
	public Location updateLocation(Location location, Long id) throws LocationNotFoundException {
		Optional<Location> locationOption = locationRepo.findById(id);
		if(locationOption.isPresent()) {
			location.setId(locationOption.get().getId());
			location.setLocation(locationOption.get().getLocation());
			location.setSector(locationOption.get().getSector());
			return locationRepo.save(location);
		}else {
			throw new LocationNotFoundException(id);
		}
	}

	@Override
	public Location getLocation(Long id) throws LocationNotFoundException {
		Optional<Location> locationOption = locationRepo.findById(id);
		if(locationOption.isPresent()) {
			return locationOption.get();
		}else{
            throw new LocationNotFoundException(id);
        }
	}

	@Override
	public void deleteLocation(Long id) throws LocationNotFoundException {
		Optional<Location> locationOption = locationRepo.findById(id);
		if(locationOption.isPresent()) {
			locationRepo.deleteById(id);
		}else{
            throw new LocationNotFoundException(id);
        }
		
	}

}
