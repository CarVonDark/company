package com.carlos.company.service;

import com.carlos.company.modal.Department;

import java.util.List;

public interface DepartmentService {
    List<Department> getAllDepartment();
    List<Department> getDepartmentsByEmployee(int employeeID);
    void save(Department department);
    void delete(int id);
}
