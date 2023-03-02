package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;


public interface UserService {
	public UserDto findByUid(Long uid);
	public User findByUnameAndUpassword(String uname,String upassword);
	public UserDto updateUser(long uid,User user);
	public UserDto addUser(UserDto userDto);
	public List<UserDto> getAllUsers();
	public String deleteUser(Long uid);
}
