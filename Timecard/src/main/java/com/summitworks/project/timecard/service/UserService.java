package com.summitworks.project.timecard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.summitworks.project.timecard.exception.UserNotFoundException;
import com.summitworks.project.timecard.model.User;
import com.summitworks.project.timecard.repo.UserRepository;

public class UserService implements UserServiceInterface{
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User addNewUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User updateUser(User user, Long id) throws UserNotFoundException {
		Optional<User> userOption = userRepo.findById(id);
		if(userOption.isPresent()) {
			user.setId(userOption.get().getId());
			user.setFirstName(userOption.get().getFirstName());
			user.setLastName(userOption.get().getLastName());
			user.setDescription(userOption.get().getDescription());
			user.setEmail(userOption.get().getEmail());
			user.setPassword(userOption.get().getPassword());
			return userRepo.save(user);
		}else {
			throw new UserNotFoundException(id);
		}
	}

	@Override
	public User getUser(Long id) throws UserNotFoundException {
		Optional<User> userOption = userRepo.findById(id);
		if(userOption.isPresent()) {
			return userOption.get();
		}else{
            throw new UserNotFoundException(id);
        }
	}

	@Override
	public void deleteUser(Long id) throws UserNotFoundException {
		Optional<User> userOption = userRepo.findById(id);
		if(userOption.isPresent()) {
			userRepo.deleteById(id);
		}else{
            throw new UserNotFoundException(id);
        }
	}

}
