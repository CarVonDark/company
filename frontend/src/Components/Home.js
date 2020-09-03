import React, {Component} from "react"
import {makeStyles} from "@material-ui/core/styles";
import GroupIcon from "@material-ui/icons/Group";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import EmployeeList from "./employeeList";
import DepartmentList from "./DepartmentList";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import 'bootstrap/dist/css/bootstrap.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div className="container"
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <p></p>
                    <Avatar style={{
                        width: "50px",
                        height: "50px"
                    }}
                    >
                        <GroupIcon style={{
                            width: "50px",
                            height: "50px"
                        }}/>
                    </Avatar>
                    <p></p>
                    <Typography component="h1" variant="h5" style={{
                        fontSize: 32
                    }}>
                        Home Page
                    </Typography>
                    <p></p>
                    <div style={{
                        width: '100%'
                    }
                    }>
                        <Tabs activeKey={this.state.value} onSelect={key => this.setState({value: key})}
                              >
                            <Tab title="User" eventKey={0}>
                                {/*<EmployeeDepartmentList employeeID = {0} />*/}
                                <EmployeeList/>
                            </Tab>
                            <Tab title="Department" eventKey={1}>
                                <DepartmentList/>
                            </Tab>
                        </Tabs>
                    </div>

                </div>
            </div>

        )
    }
}

export default Home