package com.test.view.rest.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.test.config.message.util.MessagesUtil;

@RestController
@RequestMapping({ "/api/v1/", "" })
public class HomeController {

	@Autowired
	private MessagesUtil messagesUtil;

	@RequestMapping(value = "/secured/hello", method = RequestMethod.GET)
	public String hello() {
		/*System.out.println(messagesUtil.getMessage("Say Hello", null,
				messagesUtil.getLocale()));*/
		return "Hello World";
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String register(@RequestBody Map<String, String> regobj) {
		System.out.println(regobj);
		return "Hello World";
	}

}
