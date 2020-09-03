package com.carlos.company.modal;

import javax.persistence.*;

@Entity
@Table(name = "Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer employeeID;

    @Column
    private String first_name;

    @Column
    private String last_name;

    @Column
    private String role;

    public Integer getId(){
        return this.employeeID;
    }

    public void setId(Integer id){
        this.employeeID = id;
    }

    public String getFirstName(){
        return this.first_name;
    }

    public String getLastName() {
        return last_name;
    }

    public String getRole() {
        return role;
    }

    public void setFirstName(String firstName) {
        this.first_name = firstName;
    }

    public void setLastName(String lastName) {
        this.last_name = lastName;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
