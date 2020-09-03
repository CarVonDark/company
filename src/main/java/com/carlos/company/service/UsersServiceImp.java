package com.carlos.company.service;

import com.carlos.company.dao.UsersDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsersServiceImp implements UsersService{

    @Autowired
    private UsersDAO usersDAO;

    @Transactional
    @Override
    public boolean authenticate(String username, String password) {
        return usersDAO.authenticate(username, password);
    }

    @Transactional
    @Override
    public void save(String username, String password) {
        usersDAO.save(username, password);
    }

    @Transactional
    @Override
    public void delete(String username) {
        usersDAO.delete(username);
    }
}
