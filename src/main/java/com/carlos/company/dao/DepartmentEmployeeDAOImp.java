package com.carlos.company.dao;

import com.carlos.company.modal.DepartmentEmployee;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class DepartmentEmployeeDAOImp implements DepartmentEmployeeDAO{

    @Autowired
    private EntityManager entityManager;

    @Override
    public void save(DepartmentEmployee departmentEmployee) {
        Session curr = entityManager.unwrap(Session.class);
        curr.saveOrUpdate(departmentEmployee);
    }

    @Override
    public void delete(int id) {
        Session curr = entityManager.unwrap(Session.class);
        curr.delete(id);
    }
}
