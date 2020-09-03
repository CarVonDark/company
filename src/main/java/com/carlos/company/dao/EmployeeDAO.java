package com.carlos.company.dao;

import com.carlos.company.modal.Employee;

import java.util.List;

public interface EmployeeDAO {
    List<Employee> getAll();
    Employee get(int employeeID);
    List<Employee> getByDepartment(String departmentName);
    void save(Employee employee);
    void delete(int id);
}
