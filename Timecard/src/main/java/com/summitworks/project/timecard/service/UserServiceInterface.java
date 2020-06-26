package com.summitworks.project.timecard.service;

import java.util.List;

import com.summitworks.project.timecard.exception.UserNotFoundException;
import com.summitworks.project.timecard.model.User;

public interface UserServiceInterface {
	User addNewUser(User user);
	List<User> getAllUsers();
	User updateUser(User user, Long id) throws UserNotFoundException;
	User getUser(Long id) throws UserNotFoundException;
	void deleteUser(Long id)throws UserNotFoundException;
}
