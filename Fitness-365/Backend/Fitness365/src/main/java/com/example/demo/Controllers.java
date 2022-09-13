package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Admin;
import com.example.demo.entity.Employee;
import com.example.demo.entity.Equipment;
import com.example.demo.entity.Member;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.EquipmentRepository;
import com.example.demo.repository.MemberRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controllers {

    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private EquipmentRepository equipmentRepository;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/getAllEquipment")
    public List<Equipment> getAllEquipment() {
    	
        List<Equipment> list = equipmentRepository.findAll();
        System.out.println(list.get(0));
        return list;

    }

    @GetMapping("/getEquipment/{id}")
    public Equipment getEquipment(@PathVariable int id) {

        Equipment equipment = equipmentRepository.findByEquipmentId(id);

        return equipment;
    }

    @GetMapping("/getAllMember")
    public List<Member> getAllMember() {

        List<Member> list = memberRepository.findAll();
        System.out.println(list.get(0).getIsActive());
        return list;

    }

    @GetMapping("/getMember/{id}")
    public Member getMember(@PathVariable int id) {

        Member member = memberRepository.findByMemberId(id);

        return member;

    }

    @GetMapping("/getAllEmployee")
    public List<Employee> getAllEmployee() {

        List<Employee> list = employeeRepository.findAll();
        System.out.println(list.get(0));
        return list;

    }

    @GetMapping("/getEmployee/{id}")
    public Employee getEmployee(@PathVariable int id) {

        Employee employee = employeeRepository.findByEmployeeId(id);

        return employee;

    }

    @GetMapping("/getAllActiveEmployee")
    public List<Employee> getAllActiveEmployee() {

        List<Employee> list = employeeRepository.findByIsActive("true");
        System.out.println(list);
        return list;
    }

    @GetMapping("/getAllActiveMember")
    public List<Member> getAllActiveMember() {

        List<Member> list=memberRepository.findByIsActive("true");
        System.out.println(list);
        return list;
    }

    @GetMapping("/getAllCardioEquipment")
    public List<Equipment> getAllCardioEquipment() {

        List<Equipment> list=equipmentRepository.findByEquipmentType("Cardio");
        System.out.println(list);
        return list;

    }

    @GetMapping("/getAllStrengthEquipment")
    public List<Equipment> getAllStrengthEquipment() {

        List<Equipment> list=equipmentRepository.findByEquipmentType("Strength");
        System.out.println(list);
        return list;

    }

    @GetMapping("/getAllTrainer")
    public List<Employee> getAllTrainer() {

        List<Employee> list = employeeRepository.findByEmployeeType("Trainee");
        System.out.println(list);
        return list;

    }

    @PostMapping("/saveMember")
    public boolean saveMember(@RequestBody Member member) {
    	System.out.println(member);
        Member member2=memberRepository.save(member);
        System.out.println("Result - " +member2);
        if(member2.equals(member)) return true;
        
        return false;

    }

    @PutMapping("/editMember")
    public boolean editMember(@RequestBody Member member) {

        Member member2=memberRepository.save(member);
        if(member2 != null) return true;
        else return false;
    }

    @PostMapping("/saveEmployee")
    public boolean saveEmployee(@RequestBody Employee employee) {

        Employee employee2=employeeRepository.save(employee);

        if(employee2.equals(employee)) return true;

        return false;

    }

    @PutMapping("/editEmployee")
    public boolean editEmployee(@RequestBody Employee employee) {

        Employee employee2=employeeRepository.save(employee);
        if(employee2!=null) return true;
        else return false;

    }

    @PostMapping("/addEquipment")
    public boolean addEquipment(@RequestBody Equipment equipment) {

        Equipment equipment2=equipmentRepository.save(equipment);

        if(equipment.equals(equipment2)) return true;

        return false;

    }

    @PutMapping("/editEquipment")
    public boolean editEquipment(@RequestBody Equipment equipment) {

        Equipment equipment2=equipmentRepository.save(equipment);
        if(equipment2!= null) return true;
        else return false;

    }

    @DeleteMapping("/deleteMember/{id}")
    public boolean deleteMember(@PathVariable int id) {

        Optional<Member> member=memberRepository.findById(id);
        if(member.isPresent()){
            memberRepository.delete(member.get());
            return true;
        }
        else return false;

    }

    @DeleteMapping("/deleteEmployee/{id}")
    public boolean deleteEmployee(@PathVariable int id) {

        Optional<Employee> employee= employeeRepository.findById(id);
        if(employee.isPresent()){
            employeeRepository.delete(employee.get());
            return true;
        }
        else return false;

    }

    @DeleteMapping("/deleteEquipment/{id}")
    public boolean deleteEquipment(@PathVariable int id) {

        Optional<Equipment> equipment=equipmentRepository.findById(id);
        if(equipment.isPresent()){
            equipmentRepository.delete(equipment.get());
            return true;
        }
        else return false;

    }

    @PostMapping("/login")
	public boolean login(@RequestBody Admin admin) {
		Admin admin2=new Admin();
        admin2=adminRepository.findByAdminId(admin.getAdminId());
        if(admin2==null) return false;
        System.out.println(admin2 + " "+ admin +" "+admin.getAdminId());
        if(admin2.getPassword().equals(admin.getPassword())) return true;
        return false;

	}
}
