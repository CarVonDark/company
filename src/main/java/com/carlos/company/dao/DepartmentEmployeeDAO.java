package com.carlos.company.dao;

import com.carlos.company.modal.DepartmentEmployee;

public interface DepartmentEmployeeDAO {
    void save(DepartmentEmployee departmentEmployee);
    void delete(int id);
}
