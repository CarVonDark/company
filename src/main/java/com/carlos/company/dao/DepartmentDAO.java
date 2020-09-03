package com.carlos.company.dao;

import com.carlos.company.modal.Department;

import java.util.List;

public interface DepartmentDAO {
    List<Department> getAllDepartment();
    List<Department> getDepartmentsByEmployee(int employeeID);
    void save(Department department);
    void delete(int id);
}
