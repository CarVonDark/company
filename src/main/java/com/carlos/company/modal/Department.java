package com.carlos.company.modal;

import javax.persistence.*;

@Entity
@Table(name = "Department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int departmentID;

    @Column
    private String name;

    @Column
    private String description;


    public int getId(){
        return this.departmentID;
    }

    public void setId(int id) {
        this.departmentID = id;
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription(){
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
