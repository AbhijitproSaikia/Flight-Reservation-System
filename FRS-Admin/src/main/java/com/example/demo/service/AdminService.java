package com.example.demo.service;

import java.util.List;


import com.example.demo.dto.AdminDto;
import com.example.demo.entity.Admin;


public interface AdminService {
	
	public List<AdminDto> getAllAdmins();
	public AdminDto addAdmin(AdminDto userDto);
	public AdminDto findByAid(Long aid);
	public Admin findByAnameAndApassword(String aname,String apassword);
}
