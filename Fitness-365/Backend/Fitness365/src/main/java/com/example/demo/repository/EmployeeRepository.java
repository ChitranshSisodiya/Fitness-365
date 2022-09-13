package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	Employee findByEmployeeId(int id);

	List<Employee> findByIsActive(String string);

	List<Employee> findByEmployeeType(String string);

	int deleteByEmployeeId(int id);
}
