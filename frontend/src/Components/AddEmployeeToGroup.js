import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import GroupIcon from "@material-ui/icons/Group";
import Grid from "@material-ui/core/Grid";
import {SectionList} from "react-native-web";
import Button from "@material-ui/core/Button";

class AddEmployeeToGroup extends Component {

    useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(7),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(3)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: "100%"
        }
    }));

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            departments: [],
            selectEmployee: 2,
            selectDepartment: 1
        }

    }

    componentDidMount() {
        fetch("company/employee").
        then(response => response.json()).
        then((result) => {
            this.setState({
                employees: result
            })
        })
        fetch(`/company/departments`).then(response => response.json()).then((result) => {
            this.setState({
                departments: result
            })
        })
    }

    handleEmployeeChange = (event) => {
        this.setState({selectEmployee: event.target.value})
    }

    handleDepartmentChange = (event) => {
        this.setState({selectDepartment: event.target.value})
    }

    handleSubmit = () => {
        const data = {departmentID: this.state.selectDepartment, employeeID: this.state.selectEmployee};
        fetch("/company/department_employee", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json"
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

    }

    render() {
        return (
            <div className={this.useStyles.paper} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Avatar className={this.useStyles.avatar}>
                    <GroupIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Relation
                </Typography>
                <p></p>
                <form className={this.useStyles.form} noValidate>
                    <Grid item xs = {12}>
                        <select value = {this.state.selectEmployee} style={{
                            fontSize: 18,
                            fontFamily: 'Times New Roman'
                        }}
                                onChange={this.handleEmployeeChange}
                        >
                            {
                                this.state.employees.map(employee => (
                                    <option size={12} value={employee.id} style={{
                                        fontSize: 18,
                                        fontFamily: 'Times New Roman'
                                    }}>{employee.firstName} {employee.lastName}</option>
                                ))
                            }
                        </select>
                    </Grid>
                    <p></p>
                    <Grid item xs = {12}>
                        <select value = {this.state.selectDepartment} style={{
                            fontSize: 18,
                            fontFamily: 'Times New Roman'
                        }}
                                onChange={this.handleDepartmentChange}
                        >
                            {
                                this.state.departments.map(department => (
                                    <option size={12} value={department.id} style={{
                                        fontSize: 18,
                                        fontFamily: 'Times New Roman'
                                    }}>{department.name}</option>
                                ))
                            }
                        </select>
                    </Grid>
                    <p></p>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        preventDefault
                        className={this.useStyles.submit}
                        onClick={this.handleSubmit}
                    >
                        Save
                    </Button>
                </form>
                <p></p>
                <button // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    preventDefault
                    className={this.useStyles.submit}
                    style={{
                        fontSize: 18
                    }}
                    onClick={this.props.history.goBack}>Back</button>


            </div>
        )
    }
}
export default AddEmployeeToGroup