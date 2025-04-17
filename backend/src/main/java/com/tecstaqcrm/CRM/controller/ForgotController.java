package com.tecstaqcrm.CRM.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/forgot")
public class ForgotController {

    private Map<String, Integer> otpMap = new HashMap<>(); 

    public String openEmailForm() {
        return "forgot_email_form";
    }

    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        if (email == null || email.isEmpty()) {
            return new ResponseEntity<>("Email is required", HttpStatus.BAD_REQUEST);
        }
        System.out.println("EMAIL: " + email);

        Random random = new Random();
        int otp = random.nextInt(999999); 
        String formattedOtp = String.format("%06d", otp);

        System.out.println("Generated OTP for " + email + ": " + formattedOtp);
        otpMap.put(email, Integer.parseInt(formattedOtp)); // Store OTP with email

        return new ResponseEntity<>("OTP sent successfully", HttpStatus.OK);
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String otp = payload.get("otp");

        if (email == null || email.isEmpty() || otp == null || otp.isEmpty()) {
            return new ResponseEntity<>("Email and OTP are required", HttpStatus.BAD_REQUEST);
        }

        Integer storedOtp = otpMap.get(email);

        if (storedOtp != null && storedOtp.toString().equals(otp)) {
            otpMap.remove(email); 
            return new ResponseEntity<>("OTP verified successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid OTP", HttpStatus.UNAUTHORIZED);
        }
    }
}