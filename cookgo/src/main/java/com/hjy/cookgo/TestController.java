package com.hjy.cookgo;

import java.util.Date;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
public class TestController {
	@GetMapping("/api/hello")
	public String hello(Model model) {
		log.info("hello...");
		//model.addAttribute("msg","Hello World");
		return "Server Time : " + new Date() + ".\n";
	}
}
