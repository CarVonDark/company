package com.carlos.company.dao;

public interface UsersDAO {
    boolean authenticate(String username, String password);
    void save(String username, String password);
    void delete(String username);
    void addDepartment(int userID, int departmentID);
}
