import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import DepartmentEmployeeList from "./DepartmentEmployeeList";


class departmentList extends Component {

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
            departments: [],
            uniqueDe: null,
            isLoading: false,
            //,
            classes: this.useStyles
        }
        this.uniqueDe = null;
    }

    componentDidMount() {
        fetch(`/company/departments`).then(response => response.json()).then((result) => {
            this.setState({
                departments: result
            })
        })
    }



    render() {
        return (
            <div
                className={this.state.classes.paper}
            >

                    <TableContainer
                        style={{width: "80%", margin: "0 10px"}}
                        component={Paper}
                    >
                        <Table
                            className={this.state.classes.table}
                            aria-label="Departments">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Department</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.departments.map((uniqueDepartment,index) => (
                                    <TableRow>
                                        <TableCell align="center" onClick={() => this.handleClick(index)}>{uniqueDepartment.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <p><button
                            onClick={() => this.handleClick(-1)}>View All</button> </p>
                        <p></p>
                        <Link
                            className={this.state.classes.link}
                            to="/addDepartment"
                        >
                            {" "}
                            <Typography align="left">
                                &#x2190; add Department
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
                        <DepartmentEmployeeList departmentName =
                                                    {this.state.uniqueDe}
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
                        this.setState({isLoading: false, uniqueDe: null})
                    }, 100)
            )
        }else {
            this.setState(
                {isLoading: true, uniqueDe: this.state.departments[index].name},
                () => setTimeout(
                    () => {
                        this.setState({isLoading: false})
                    }, 100)
            )
        }
    }
}

export default departmentList