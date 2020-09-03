import React, {Component} from "react";
import Table from "@material-ui/core/Table";
import "./DepartmentEmployeeList.css"
import TableCell from "@material-ui/core/TableCell";
import {makeStyles} from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";


class EmployeeDepartmentList extends Component {

    useStyles = makeStyles(theme => ({
        table: {
            minWidth: 600
        }
    }));


    constructor(props) {
        super(props)
        this.state = {
            tableHeads: ['name'],
            departments: [],
            message: null
        }
    }

    componentDidMount() {
        fetch("company/departments").then(response => response.json()).then((result) => {
            console.log(result)
            this.setState({
                departments: result
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.employeeID !== prevProps.employeeID) {
            if (this.props.employeeID === null) {
                fetch("company/departments").then(response => response.json()).then((result) => {
                    this.setState({
                        departments: result
                    })
                })
            } else {

                fetch(`/company/employee/${this.props.employeeID}/departments`).then(response => response.json())
                    .then((result) => {
                        this.setState({
                            departments: result
                        })
                    })
            }
        }
    }

    render() {

            return (
                <Table
                    className={this.useStyles.table}
                    aria-label="Departments">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.departments.map(
                                department =>
                                    <TableRow align = "center">
                                        <TableCell align="center">{department.name}</TableCell>
                                    </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            );



    }
}

export default EmployeeDepartmentList