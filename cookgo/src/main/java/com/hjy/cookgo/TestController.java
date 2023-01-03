package com.hjy.cookgo;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	@GetMapping("/api/hello")
	public String hello() {
		return "Server Time : " + new Date() + ".\n";
	}
}