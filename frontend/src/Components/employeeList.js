import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import EmployeeDepartmentList from "./EmployeeDepartmentList"
import cookie from "react-cookies";


class EmployeeList extends Component {

    useStyles = makeStyles(theme => ({
        table: {
            minWidth: 800
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        paper: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: `10px`,
            height: "100%",
            width: "99%",
            marginTop: theme.spacing(7)
        },
        link: {
            color: "rgba(0,0,0,0.65)",
            textDecoration: "none",
            marginLeft: "10%",
            alignSelf: "flex-start",
            "&:hover": {
                color: "rgba(0,0,0,1)"
            }
        }
    }));

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            uniqueEm: null,
            isLoading: false,
            classes: this.useStyles
        }
        this.uniqueDe = null;
    }

    componentDidMount() {
        fetch(`/company/employee`).then(response => response.json()).then((result) => {
            this.setState({
                employees: result
            })
            let myDate = new Date();
            myDate.setDate(Date.now() + 1000)
            cookie.save("userInfo", true, {
                path: "/",
                expire: myDate,
                maxAge: 100
            }
        )
        })
        console.log("why")
    }

    render() {
        return (
            <div
                className={this.state.classes.paper}
            >
                <TableContainer
                    style={{width: "80%", margin: "10 10px"}}
                    component={Paper}
                >
                    <Table
                        className={this.state.classes.table}
                        aria-label="Employee">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">First Name</TableCell>
                                <TableCell align="center">Last Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.employees.map((uniqueEmployee,index) => (
                                <TableRow>
                                    <TableCell align="center" onClick={() => this.handleClick(index)}>{uniqueEmployee.firstName}</TableCell>
                                    <TableCell align="center" onClick={() => this.handleClick(index)}>{uniqueEmployee.lastName}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <p><button
                        onClick={() => this.handleClick(-1)}>View All</button> </p>
                    <p></p>
                    <Link
                        className={this.state.classes.link}
                        to="/addEmployee"
                    >
                        {" "}
                        <Typography align="left">
                            &#x2190; add Employee
                        </Typography>{" "}
                    </Link>
                    <p></p>
                    <Link
                        className={this.state.classes.link}
                        to="/addRelation"
                    >
                        {" "}
                        <Typography align="left">
                            &#x2190; add Employee to group
                        </Typography>{" "}
                    </Link>
                    <EmployeeDepartmentList employeeID =
                                                {this.state.uniqueEm}
                    />

                </TableContainer>

            </div>
        )
    }

    handleClick = (index) => {
        if(index === -1){
            this.setState(
                {isLoading: true},
                () => setTimeout(
                    () => {
                        this.setState({isLoading: false, uniqueEm: null})
                    }, 100)
            )
        }else {
            // console.log(this.state.employees[index].id);
            this.setState(
                {isLoading: true, uniqueEm: this.state.employees[index].id},
                () => setTimeout(
                    () => {
                        this.setState({isLoading: false})
                    }, 100)
            )
        }
    }
}

export default EmployeeList