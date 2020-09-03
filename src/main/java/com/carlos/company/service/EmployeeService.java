package com.carlos.company.service;

import com.carlos.company.modal.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> getAll();
    List<Employee> getByDepartment(String departmentName);
    Employee get(int id);
    void save(Employee employee);
    void delete(int id);
}

