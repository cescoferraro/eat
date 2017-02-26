import * as React from "react";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {PostList} from "./post/post.tab";
import {PeopleList} from "./people/people.list";
import {GeneralTab} from "../../components/general/general";
import {Switch, Route} from "react-router-dom";
declare let global, firebase, require, window: any;


const css = require('./css/dashboard.pcss');


@withStyles(css)
export class Dashboard extends React.Component<any, any> {
    context: any;
    static contextTypes = {router: React.PropTypes.object};


    constructor(props) {
        super(props);
    }

    logout() {
        firebase.auth().signOut().then(() => {
            console.log("// Sign-out successful.");
            this.props.push("/admin");
        }, (error) => {
            console.log("// An error happened.");
        });
    }

    render() {
        return (
            <div>

                <Route component={AppShell}/>
                <Route component={DashboardTab}/>
                <Switch>
                    <Route exact path="/dashboard/posts" component={PostList}/>
                    <Route exact path="/dashboard/people" component={PeopleList}/>
                    <Route path="/dashboard/general" component={GeneralTab}/>
                </Switch>
            </div>);
    }
}


const AppShell = () => {
    return <h2>SHelll</h2>
};


const DashboardTab = () => {
    return <h2>dkjfnsdfsf</h2>
};
