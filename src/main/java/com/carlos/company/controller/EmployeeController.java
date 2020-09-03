package com.carlos.company.controller;

import com.carlos.company.modal.*;
import com.carlos.company.service.DepartmentEmployeeService;
import com.carlos.company.service.DepartmentService;
import com.carlos.company.service.EmployeeService;
import com.carlos.company.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/company")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DepartmentService departmentService;

    @Autowired
    private DepartmentEmployeeService departmentEmployeeService;

    @Autowired
    private UsersService usersService;

    @GetMapping("/employee")
    public List<Employee> getAll() {
        return employeeService.getAll();
    }

    @GetMapping("/employee/{employeeID}/departments")
    public List<Department> getDepartmentByEmployee(@PathVariable int employeeID) {
        return departmentService.getDepartmentsByEmployee(employeeID);
    }

    @GetMapping("/{departmentName}")
    public List<Employee> getByDepartment(@PathVariable String departmentName){ return employeeService.getByDepartment(departmentName); }

    @GetMapping("/departments")
    public List<Department> getAllDepartments() { return departmentService.getAllDepartment(); }


    @PostMapping("/employee")
    public ResponseEntity<Employee> save(@RequestBody Employee employee) {
//        if(!employee.check()){
//            return ResponseEntity.noContent().build();
//        }

        employeeService.save(employee);
        return new ResponseEntity<Employee>(employee,HttpStatus.OK);
    }

    @PostMapping("/users/auth")
    public ResponseEntity<BooleanContainer> authenticate(@RequestBody User user){
        if(usersService.authenticate(user.getUsername(), user.getPassword())) {
            //System.out.println("Checked");
            return new ResponseEntity<BooleanContainer>(new BooleanContainer(true), HttpStatus.ACCEPTED);
        }
        else {
            //System.out.println("Failed");
            return new ResponseEntity<BooleanContainer>(new BooleanContainer(false), HttpStatus.OK);
        }

    }

    @PostMapping("/users")
    public ResponseEntity<User> saveUser(@RequestBody User users){
        usersService.save(users.getUsername(), users.getPassword());
        return new ResponseEntity<User>(users, HttpStatus.OK);
    }


    @PostMapping("/department")
    public ResponseEntity<Department> save(@RequestBody Department department){
        departmentService.save(department);
        return new ResponseEntity<Department>(department, HttpStatus.OK);
    }

    @PostMapping("/department_employee")
    public ResponseEntity<DepartmentEmployee> saveDepartmentEmployee(@RequestBody DepartmentEmployee departmentEmployee){
        departmentEmployeeService.save(departmentEmployee);
        return new ResponseEntity<DepartmentEmployee>(departmentEmployee, HttpStatus.OK);
    }

    @GetMapping("/employee/{id}")
    public Employee get(@PathVariable int id) {
        return employeeService.get(id);
    }

    @DeleteMapping("/employee/{id}")
    public String delete(@PathVariable int id) {

        employeeService.delete(id);

        return "Employee removed with id " + id;

    }

    @DeleteMapping("/department/{id}")
    public String deleteDepartment(@PathVariable int id){
        departmentService.delete(id);
        return "Department removed with id" + id;
    }

    @PutMapping("/employee")
    public Employee update(@RequestBody Employee employee) {
        employeeService.save(employee);
        return employee;
    }
}