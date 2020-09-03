
import React, { Component } from "react";
import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
import departmentList from "./Components/DepartmentList";
import AddDepartment from "./Components/AddDepartment"
import Login from "./Components/Login"
import PrivateRouter from "./Components/PrivateRouter"
import CheckAuth from "./Components/CheckAuth";
import employeeList from "./Components/employeeList"
import Home from "./Components/Home"
import AddEmployeeToGroup from "./Components/AddEmployeeToGroup";

class App extends Component {

    checkAuth = new CheckAuth();

    render() {
        return (
            <Router>
                <PrivateRouter exact path="/addEmployee" authed={this.checkAuth} component={AddEmployee} />
                <PrivateRouter exact path="/addDepartment" authed={this.checkAuth} component={AddDepartment} />
                <PrivateRouter exact path="/addRelation" authed={this.checkAuth} component={AddEmployeeToGroup} />
                <PrivateRouter exact path="/" authed={this.checkAuth} component={Home}/>
                {/*<Route exact path="/addEmployee" component={AddEmployee} />*/}
                {/*<Route exact path="/addDepartment" component={AddDepartment} />*/}
                {/*<Route exact path="/view" component={departmentList} />*/}
                <Route exact path="/login" component={Login}/>
            </Router>

        );
    }
}

export default App;