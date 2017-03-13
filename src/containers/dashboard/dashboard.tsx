import * as React from "react";
import {connect} from "react-redux";
import {compose} from "recompose";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {General} from "../../components/general/general";
import {Switch, Route} from "react-router-dom";
import {Tabs, Tab} from "material-ui/Tabs";
import {TabsExampleSwipeable} from "../../components/tabs/tabs";
import {Workers} from "../../components/workers/workers";
import {JobsComponent} from "../../components/jobs/jobs";

const css = require('./dashboard.pcss');


export const Dashboard = compose(
    withStyles(css)
)(({}) => (
        <Switch>
            <TabsExampleSwipeable>
                <Route exact path="/dashboard/jobs"
                       component={JobsComponent}/>
                <Route exact path="/dashboard/workers"
                       component={Workers}/>
                <Route path="/dashboard/general"
                       component={General}/>
            </TabsExampleSwipeable>
        </Switch>
    )
);

