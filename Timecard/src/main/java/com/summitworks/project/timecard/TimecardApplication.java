package com.summitworks.project.timecard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages={"com.summitworks.project.timecard"})
//@ComponentScan({"com.summitworks.project.timecard"})
//@EntityScan("com.summitworks.project.timecard.model")
//@EnableJpaRepositories("com.summitworks.project.timecard.repo")
public class TimecardApplication {

	public static void main(String[] args) {
		SpringApplication.run(TimecardApplication.class, args);
	}

}
