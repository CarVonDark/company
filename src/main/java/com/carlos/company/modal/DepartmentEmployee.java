package com.carlos.company.modal;

import javax.persistence.*;

@Entity
@Table(name = "department_employee")
public class DepartmentEmployee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int ID;

    @Column
    private int departmentID;

    @Column
    private int employeeID;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getDepartmentID() {
        return departmentID;
    }

    public int getEmployeeID() {
        return employeeID;
    }

    public void setDepartmentID(int departmentID) {
        this.departmentID = departmentID;
    }

    public void setEmployeeID(int employeeID) {
        this.employeeID = employeeID;
    }
}
