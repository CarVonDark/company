package com.carlos.company.service;

import com.carlos.company.dao.EmployeeDAO;
import com.carlos.company.modal.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeServiceImp implements EmployeeService{

    @Autowired
    private EmployeeDAO employeeDao;

    @Transactional
    @Override
    public List<Employee> getAll() {
        return employeeDao.getAll();
    }

    @Transactional
    @Override
    public List<Employee> getByDepartment(String departmentName) {
        return employeeDao.getByDepartment(departmentName);
    }

    @Transactional
    @Override
    public Employee get(int id) {
        return employeeDao.get(id);
    }

    @Transactional
    @Override
    public void save(Employee employee) {
        employeeDao.save(employee);

    }

    @Transactional
    @Override
    public void delete(int id) {
        employeeDao.delete(id);

    }
}
