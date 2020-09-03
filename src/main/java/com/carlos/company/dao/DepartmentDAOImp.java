package com.carlos.company.dao;

import com.carlos.company.modal.Department;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class DepartmentDAOImp implements DepartmentDAO{
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Department> getAllDepartment() {
        Session curr = entityManager.unwrap(Session.class);
        Query query = curr.createSQLQuery("Select distinct departmentID, name, description FROM department order by name ASC ").setResultTransformer(Transformers.aliasToBean(Department.class));
        List<Department> list = query.getResultList();
        return list;
    }

    @Override
    public List<Department> getDepartmentsByEmployee(int employeeID) {
        Session curr = entityManager.unwrap(Session.class);
        Query query = curr.createSQLQuery("Select de.departmentID, de.name, de.description " +
                "FROM department de " +
                "JOIN department_employee dee on de.departmentID = dee.departmentID " +
                "where dee.employeeID = ?1 " +
                "order by de.name ASC ").setResultTransformer(Transformers.aliasToBean(Department.class));
        query.setParameter(1, employeeID);
        List<Department> list = query.getResultList();
        return list;
    }

    @Override
    public void save(Department department) {
        Session curr = entityManager.unwrap(Session.class);
        curr.saveOrUpdate(department);
    }

    @Override
    public void delete(int id) {
        Session curr = entityManager.unwrap(Session.class);
        curr.delete(id);
    }
}
