import * as React from "react";
import Match from "react-router/Match";
import Miss from "react-router/Miss";
import {createAsyncComponent} from "react-async-component";
import {NoMatch} from "./components/404/index";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import {AsyncHome} from "./components/home/index";


export default (userAgent) => {
    return (
        <div>


            <Match exactly pattern="/" component={AsyncHome(userAgent)}/>
            <Match exactly pattern="/admin" component={Login}/>
            <Match exactly pattern="/dashboard" component={Dashboard}/>
            <Miss component={NoMatch}/>
        </div>
    )
}
