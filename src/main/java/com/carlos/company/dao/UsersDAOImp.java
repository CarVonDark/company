package com.carlos.company.dao;

import com.carlos.company.modal.User;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;

@Repository
public class UsersDAOImp implements UsersDAO{
    @Autowired
    private EntityManager entityManager;

    @Override
    public boolean authenticate(String username, String password) {
        Session curr = entityManager.unwrap(Session.class);
        Query query = curr.
                createSQLQuery("Select username, password from users where username = :username")
                .setResultTransformer(Transformers.aliasToBean(User.class));
        query.setParameter("username", username);
        User user;
        try {
            user = (User) query.getSingleResult();
        }catch (NoResultException e){
            return false;
        }
        return user.getPassword().equals(new User(username,password).getPassword());
    }

    @Override
    public void save(String username, String password) {
        User users = new User(username, password);
        Session curr = entityManager.unwrap(Session.class);
        curr.saveOrUpdate(users);
    }

    @Override
    public void delete(String username) {
        Session curr = entityManager.unwrap(Session.class);
        curr.saveOrUpdate(username);
    }

    @Override
    public void addDepartment(int userID, int departmentID) {
        Session curr = entityManager.unwrap(Session.class);
        Query query = curr.
                createSQLQuery("insert into department_users(userID, departmentID)" +
                        "values(?1, ?2)");
        query.setParameter(1, userID);
        query.setParameter(2, departmentID);


    }
}
