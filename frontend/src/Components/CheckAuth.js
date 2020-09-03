import React, {Component} from "react";
import cookie from "react-cookies"

class CheckAuth extends Component {


    async login(username, password) {
        // const data = {username: username, password: password};
        // fetch("/company/users/auth", {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     mode: "cors", // no-cors, *cors, same-origin
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: "same-origin", // include, *same-origin, omit
        //     headers: {
        //         "Content-Type": "application/json"
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: "follow", // manual, *follow, error
        //     referrerPolicy: "no-referrer", // no-referrer, *client
        //     body: JSON.stringify(data) // body data type must match "Content-Type" header
        // })
        //     .then(response => response.json()).then((result) => {
        //     let myDate = new Date();
        //     myDate.setDate(Date.now() + 1000)
        //     cookie.save("userInfo", result.bool, {
        //         path: "/",
        //         expire: myDate,
        //         maxAge: 100
        //     })
        //
        // })
        // console.log(cookie.load("userInfo"))
        // if (cookie.load("userInfo") === "true") {
        //     return true
        // } else
        //     return false
        const data = {username: username, password: password};
        const response = await fetch("/company/users/auth", {
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
        }).then(response => response.json()).then((result) => {
                let myDate = new Date();
                myDate.setDate(Date.now() + 1000)
                cookie.save("userInfo", result.bool, {
                    path: "/",
                    expire: myDate,
                    maxAge: 100
                })

            })
            console.log(cookie.load("userInfo"))
            if (cookie.load("userInfo") === "true") {
                return true
            } else
                return false
    }
}

export default CheckAuth

