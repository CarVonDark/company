import React, {Component} from "react";
import {Route, Redirect} from "react-router";
import cookies from "react-cookies"

const PrivateRouter = ({Component: Component, authed, ...rest}) => {
    // return (
    //     <Route {...rest} render={(props) => (
    //         localStorage.getItem("userInfo") === "true"
    //             ? <Component {...props} />
    //             : <Redirect to={{
    //                 pathname: "/login"
    //             }}/>
    //     )}/>
    if(cookies.load("userInfo") === "true")
        return(
            <Route {...rest} render={(props) => (
                <Component {...props}/>
            )}/>
    )
    else
        return (
            <Redirect to={{
            pathname: "/login"}
            }/>
        )}

export default PrivateRouter
