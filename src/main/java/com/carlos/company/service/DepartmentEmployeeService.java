package com.carlos.company.service;

import com.carlos.company.modal.DepartmentEmployee;

public interface DepartmentEmployeeService {
    void save(DepartmentEmployee departmentEmployee);
    void delete(int id);
}
