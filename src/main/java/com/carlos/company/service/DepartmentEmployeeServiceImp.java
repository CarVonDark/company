package com.carlos.company.service;

import com.carlos.company.dao.DepartmentEmployeeDAO;
import com.carlos.company.modal.DepartmentEmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DepartmentEmployeeServiceImp implements DepartmentEmployeeService{

    @Autowired
    private DepartmentEmployeeDAO departmentEmployeeDAO;

    @Transactional
    @Override
    public void save(DepartmentEmployee departmentEmployee) {
        departmentEmployeeDAO.save(departmentEmployee);
    }

    @Transactional
    @Override
    public void delete(int id) {
        departmentEmployeeDAO.delete(id);
    }

}
