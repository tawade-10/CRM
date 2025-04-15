package com.tecstaqcrm.CRM.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecstaqcrm.CRM.dto.UsersDto;
import com.tecstaqcrm.CRM.entity.Users;
import com.tecstaqcrm.CRM.repository.UsersRepository;

@Service
public class UsersService {

    @Autowired
    UsersRepository usersRepository;

    public Users addUser(Users user) {
        return usersRepository.save(user);
    }

    public Users loginUser(UsersDto usersDto) {
        Optional<Users> optionalUser = usersRepository.findByUsername(usersDto.getUsername());

        if (optionalUser.isPresent()) {
            Users user = optionalUser.get();

            if (usersDto.getPassword().equals(user.getPassword())) {
                return user;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}