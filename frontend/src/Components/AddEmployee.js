import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DepartmentList from "./DepartmentList";
import departmentList from "./DepartmentList";

const useStyles = makeStyles(theme => ({
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

export default function AddEmployee() {
    const classes = useStyles();
    const [firstLoad, setLoad] = React.useState(true);

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [role, setRole] = React.useState("");

    const handleFirstNameChange = event => setFirstName(event.target.value);
    const handleLastNameChange = event => setLastName(event.target.value);
    const handleRoleChange = event => setRole(event.target.value);

    const [message, setMessage] = React.useState("Nothing saved in the session");

    async function sampleFunc(toInput) {
        const response = await fetch("/company/employee", {
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
            body: JSON.stringify(toInput) // body data type must match "Content-Type" header
        });

        let body = await response.json();
        console.log(body.id);
        setMessage(body.id ? "Data successfully updated" : "Data updating failed");
    }

    const handleSubmit = variables => {
        const toInput = { firstName, lastName, role};
        sampleFunc(toInput);
        setFirstName("");
        setLastName("")
        setRole("");
    };

    if (firstLoad) {
        // sampleFunc();
        setLoad(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <GroupIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Employee
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="first name"
                                value={firstName}
                                label="First Name"
                                name="First Name"
                                autoComplete="First Name"
                                onChange={handleFirstNameChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="last name"
                                value={lastName}
                                label="Last Name"
                                name="Last Name"
                                autoComplete="Last Name"
                                onChange={handleLastNameChange}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="role"
                                value={role}
                                label="Role"
                                name="role"
                                autoComplete="Role"
                                onChange={handleRoleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        preventDefault
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>

                    <Grid container justify="center">
                        <Grid item>
                            <Link to="/">Back to Home</Link>
                        </Grid>
                    </Grid>
                </form>
                <Typography style={{ margin: 7 }} variant="body1">
                    Status: {message}
                </Typography>
            </div>
        </Container>
    );
}