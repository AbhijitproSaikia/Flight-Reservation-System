package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.example.demo.dto.AdminDto;
import com.example.demo.entity.Admin;
import com.example.demo.service.AdminService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v6")
public class AdminController {

	@Autowired
    private AdminService adminService;
	
	@GetMapping("/admins")
    public ResponseEntity<List<AdminDto>> admins() {
        List<AdminDto> adminDtos = adminService.getAllAdmins();
        return new ResponseEntity<List<AdminDto>>(adminDtos, HttpStatus.OK);
    }
	
	@GetMapping("/adminvalidate/{aname}/{apassword}")
	public ResponseEntity<Long> validation(@PathVariable String aname,@PathVariable String apassword){
		   Long id =(long) 0;
		   try {
			   Admin adminData = adminService.findByAnameAndApassword(aname, apassword);
			   if(adminData.getAname().equals(aname) && adminData.getApassword().equals(apassword)) {
					 id = adminData.getAid();
				   }
		   }catch(Exception ex) {
			   	id = (long) 0;
		   } 	   
		   
		return new ResponseEntity<Long>(id,HttpStatus.OK); 		   
	   }
	
	@PostMapping("/addadmin")
    public ResponseEntity<AdminDto> createAser(@RequestBody AdminDto adminDto) {
        AdminDto newAdminDto = adminService.addAdmin(adminDto);
        return new ResponseEntity<AdminDto>(newAdminDto, HttpStatus.CREATED);
    }
	
}
