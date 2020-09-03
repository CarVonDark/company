package com.carlos.company.dao;

import com.carlos.company.modal.Employee;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class EmployeeDAOImp implements EmployeeDAO{
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Employee> getAll() {
        Session curr = entityManager.unwrap(Session.class);
        Query query = curr.createSQLQuery("Select employeeID, first_name, last_name, role FROM employee order by last_name ASC ").setResultTransformer(Transformers.aliasToBean(Employee.class));
        List<Employee> list = query.getResultList();
        return list;
    }

    @Override
    public Employee get(int id) {
        Session curr = entityManager.unwrap(Session.class);
        Employee employee = curr.get(Employee.class, id);
        return employee;
    }

    @Override
    public List<Employee> getByDepartment(String departmentName) {
        Session curr = entityManager.unwrap(Session.class);
        Query query = curr.createSQLQuery("Select e.employeeID, e.first_name, e.last_name, e.role " +
                "FROM employee e " +
                "JOIN department_employee dee on e.employeeID = dee.employeeID " +
                "JOIN department de on dee.departmentID = de.departmentID " +
                "where de.name = ?1 " +
                "order by e.last_name ASC ").setResultTransformer(Transformers.aliasToBean(Employee.class));
        query.setParameter(1, departmentName);
        List<Employee> list = query.getResultList();
        return list;
    }


    @Override
    public void save(Employee employee) {
        Session curr = entityManager.unwrap(Session.class);
        curr.saveOrUpdate(employee);

    }

    @Override
    public void delete(int id) {
        Session curr = entityManager.unwrap(Session.class);
        curr.delete(id);
    }
}
