import * as React from "react";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Pizza from "material-ui/svg-icons/maps/local-pizza";
import FlatButton from "material-ui/FlatButton";
import TabsExampleSwipeable from "./tabs";
import {PostList} from "./post/post.list";
import {PeopleList} from "./people/people.list";
declare let global, firebase, require, window: any;
let css = require('./css/dashboard.pcss');

class Dashboard extends React.Component<any, any> {
    context: any;
    static contextTypes = {router: React.PropTypes.object};


    constructor(props) {
        super(props);
    }

    logout() {
        firebase.auth().signOut().then(() => {
            console.log("// Sign-out successful.");
            this.context.router.transitionTo("/admin");
        }, (error) => {
            console.log("// An error happened.");
        });
    }

    render() {
        return (
            <div className={css.page}>
                <AppBar
                    title={<span >Eat Admin Panel</span>}
                    onTitleTouchTap={handleTouchTap}
                    iconElementLeft={<IconButton><Pizza /></IconButton>}
                    iconElementRight={<FlatButton
                    onClick={this.logout.bind(this)}
                    label="Logout" />}
                />
                <div className={css.container}>

                    <TabsExampleSwipeable>
                        <PostList></PostList>
                        <PeopleList></PeopleList>
                    </TabsExampleSwipeable>

                </div>
            </div>);
    }
}

export default withStyles(css)(Dashboard);

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}
