package com.hjy.cookgo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@EnableJpaAuditing 
// Auditing Entity Listener 활성화
public class CookgoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CookgoApplication.class, args);
	}

}
