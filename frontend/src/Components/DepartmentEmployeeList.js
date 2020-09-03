import React, {Component} from "react";
import Table from "@material-ui/core/Table";
import "./DepartmentEmployeeList.css"
import TableCell from "@material-ui/core/TableCell";
import {makeStyles} from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import {View} from "react-native";
import Text from "react-native-web/dist/exports/Text";


class DepartmentEmployeeList extends Component{

    useStyles = makeStyles(theme => ({
        table: {
            minWidth: 600
        }
    }));


    constructor(props) {
        super(props)
        this.state = {
            tableHeads: ['First Name', 'Last Name', 'Role'],
            employees: [],
            message: null
        }
    }

    componentDidMount() {
            fetch("company/employee").
            then(response => response.json()).
            then((result) => {
                console.log(result)
                this.setState({
                    employees: result
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.departmentName !== prevProps.departmentName){
            if(this.props.departmentName === null){
                fetch("company/employee").
                then(response => response.json()).
                then((result) => {
                    this.setState({
                        employees: result
                    })
                })
            } else {
                fetch(`/company/${this.props.departmentName}`).then(response => response.json()).then((result) => {
                    this.setState({
                        employees: result
                    })
                })
            }
        }
    }

    render() {
        if(isBrowser) {
            return (
                <Table
                    className={this.useStyles.table}
                    aria-label="Departments">
                    <TableHead>
                        <TableRow>
                            <TableCell>FirstName</TableCell>
                            <TableCell>LastName</TableCell>
                            <TableCell>Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <TableRow>
                                        <TableCell>{employee.firstName}</TableCell>
                                        <TableCell>{employee.lastName}</TableCell>
                                        <TableCell>{employee.role}</TableCell>
                                    </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            );
        }
        return(
            <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', backgroundColor: '9FA8DA', margin : 10 }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>First Name</Text></View>
                <p></p>
                <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>Last Name</Text></View>
                <p></p>
                <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>Role</Text></View>
                <p></p>
            </View>
            <View>
                {
                    this.state.employees.map(
                        employee =>
                            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', margin : 10}}>
                                <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>{employee.firstName}</Text></View>
                                <p></p>
                                <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>{employee.lastName}</Text></View>
                                <p></p>
                                <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>{employee.role}</Text></View>
                                <p></p>
                            </View>
                    )
                }
            </View>
            </View>

        )
    }
}
export default DepartmentEmployeeList