import * as React from "react";
import { createAsyncComponent } from "react-async-component";
import { Route, IndexRoute, Router, Switch, Link } from "react-router-dom";
import { AsyncHome } from "../../containers/home/async";
import { AsyncLogin } from "../../containers/login/async";
import { AsyncDashboard } from "../../containers/dashboard/async";
import { AsyncAppBar } from "../../containers/shell/async";
import { AsyncToaster } from "../Toaster/async";




export const TideApp = ({ userAgent }) => {
    return (

        <div>
            <Route path="/sjkdfn" component={AsyncHome(userAgent)} />
            <Route exact path="/" component={AsyncHome(userAgent)} />
            <Route component={AsyncAppBar(userAgent)} />
            <Route component={AsyncToaster(userAgent)} />
            <Switch>
                <Route exact path="/admin" component={AsyncLogin(userAgent)} />
                <Route exact path="/login" component={AsyncLogin(userAgent)} />
                <Route path="/dashboard" component={AsyncDashboard(userAgent)} />
            </Switch>
        </div>
    )
};
