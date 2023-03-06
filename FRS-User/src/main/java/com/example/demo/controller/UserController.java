package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v6")
public class UserController {

    @Autowired
    private UserService userService;
    
    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> userDtos = userService.getAllUsers();
        return new ResponseEntity<List<UserDto>>(userDtos, HttpStatus.OK);
    }
    
    @GetMapping("/validate/{uname}/{upassword}")
	public ResponseEntity<Long> validate(@PathVariable String uname,@PathVariable String upassword){
		   Long id =(long) 0;
//    	 	String s="invalid";
		   try {
			   User userData = userService.findByUnameAndUpassword(uname, upassword);
			   if(userData.getUname().equals(uname) && userData.getUpassword().equals(upassword)) {
					 id = userData.getUid();
//				   s="valid";
				   }
		   }catch(Exception ex) {
			   	id = (long) 0;
//			   s="invalid";
		   } 	   
		   
		return new ResponseEntity<Long>(id,HttpStatus.OK); 		   
	   }
    
    @PostMapping("/registration")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto newUserDto = userService.addUser(userDto);
        return new ResponseEntity<UserDto>(newUserDto, HttpStatus.CREATED);
    }
    
    @PutMapping("/updateuser/{uid}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long uid, @RequestBody User user) {
        UserDto updatedUserDto = userService.updateUser(uid, user);
        return new ResponseEntity<UserDto>(updatedUserDto, HttpStatus.OK);
    }
    
    @DeleteMapping("/user/delete/{uid}")
    public ResponseEntity<String> deleteUsers(@PathVariable Long uid) {
		 return new ResponseEntity<String>(userService.deleteUser(uid),HttpStatus.OK);
	 }
}
