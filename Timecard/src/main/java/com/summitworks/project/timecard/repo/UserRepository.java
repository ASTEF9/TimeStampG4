package com.summitworks.project.timecard.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summitworks.project.timecard.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

}
