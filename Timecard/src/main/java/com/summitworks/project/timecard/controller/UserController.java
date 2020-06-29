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

import com.summitworks.project.timecard.exception.UserNotFoundException;
import com.summitworks.project.timecard.model.User;
import com.summitworks.project.timecard.service.UserService;

@RestController
@CrossOrigin(
		allowCredentials = "true",
		origins = "*",
		allowedHeaders = "*",
		methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE, RequestMethod.PUT}
		
		)
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/users")
	List<User> all(){
		return userService.getAllUsers();
	}
	@PostMapping("/users")
	User newUser(@RequestBody User user) {
		return userService.addNewUser(user);
	}
	@GetMapping("/users/{id}")
	User getUser(@PathVariable Long id) throws UserNotFoundException{
		return userService.getUser(id);
	}
	@PutMapping("/users/{id}")
	User updateUser(@RequestBody User user,@PathVariable Long id) throws UserNotFoundException{
		return userService.updateUser(user, id);
	}
	@DeleteMapping("/users/{id}")
	void deleteUser(@PathVariable Long id) throws UserNotFoundException{
		userService.deleteUser(id);
	}
}
