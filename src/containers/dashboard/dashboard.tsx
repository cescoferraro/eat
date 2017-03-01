import * as React from "react";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {General} from "../../components/general/general";
import {Switch, Route} from "react-router-dom";
import {Tabs, Tab} from "material-ui/Tabs";
import {TabsExampleSwipeable} from "../../components/tabs/tabs";
import {Workers} from "../../components/workers/workers";
import {JobsComponent} from "../../components/jobs/jobs";
declare let global, firebase, require, window: any;

const css = require('./dashboard.pcss');


@withStyles(css)
export class Dashboard extends React.Component<any, any> {
    render() {
        return (
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
        );
    }
}
