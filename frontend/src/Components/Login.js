import React, {Component} from "react";
import {Redirect} from "react-router";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CheckAuth from "./CheckAuth";
import cookies from "react-cookies";

class Login extends Component {
    checkAuth;
    constructor(props) {
        super(props);
        this.checkAuth = new CheckAuth();
        this.state = {
            redirect: false,
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        cookies.remove("userInfo")
    }

    authenticate = () => {
        if(this.checkAuth.login(this.state.username, this.state.password)) {
            console.log("login success")
            this.setState({redirect: true})
        } else {
            console.log("failed login")
        }
    }

    setUsername(value) {
        this.setState({username: value})
    }

    handleUsernameChange = (event) => {
        this.setUsername(event.target.value);
    }

    setPassword(value) {
        this.setState({password: value})
    }

    handlePasswordChange = (event) => {
        this.setPassword(event.target.value);
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/'/>
        }
        return (
            <Container>
                <div>
                    <h1>Login</h1>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    value={this.state.username}
                                    label="Username"
                                    name="Username"
                                    autoComplete="Username"
                                    onChange={this.handleUsernameChange}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField

                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    value={this.state.password}
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoComplete=""
                                    onChange={this.handlePasswordChange}
                                />
                            </Grid>
                        </Grid>
                        <p></p>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            preventDefault
                            onClick={this.authenticate}
                        >
                            Login
                        </Button>
                    </form>

                </div>
            </Container>
        )
    }

}

export default Login