package com.carlos.company.service;

import com.carlos.company.dao.DepartmentDAO;
import com.carlos.company.modal.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DepartmentServiceImp implements DepartmentService{

    @Autowired
    private DepartmentDAO departmentDAO;

    @Transactional
    @Override
    public List<Department> getAllDepartment() {
        return departmentDAO.getAllDepartment();
    }

    @Transactional
    @Override
    public List<Department> getDepartmentsByEmployee(int employeeID) {
        return departmentDAO.getDepartmentsByEmployee(employeeID);
    }

    @Transactional
    @Override
    public void save(Department department) {
        departmentDAO.save(department);
    }

    @Transactional
    @Override
    public void delete(int id) {
        departmentDAO.delete(id);
    }
}
