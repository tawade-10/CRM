package com.tecstaqcrm.CRM.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tecstaqcrm.CRM.dto.UsersDto;
import com.tecstaqcrm.CRM.entity.Users;
import com.tecstaqcrm.CRM.service.UsersService;

@RestController
public class UsersController {

    @Autowired
    UsersService usersService;

    @PostMapping("/addUser")
    @CrossOrigin
    public Users addUser(@RequestBody Users user) {
        return usersService.addUser(user);
    }

    @PostMapping("/loginUser")
    @CrossOrigin
    public ResponseEntity<Users> loginUser(@RequestBody UsersDto usersDto) {
        Users loggedInUser = usersService.loginUser(usersDto);

        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}