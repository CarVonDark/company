package com.carlos.company.service;

public interface UsersService {
    boolean authenticate(String username, String password);
    void save(String username, String password);
    void delete(String username);
}
