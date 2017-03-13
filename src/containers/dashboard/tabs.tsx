import * as React from "react";
import {Tabs, Tab} from "material-ui/Tabs";
import FaceIcon from "material-ui/svg-icons/action/face.js";
import InboxIcon from "material-ui/svg-icons/content/inbox.js";
import SettingsIcon from "material-ui/svg-icons/action/settings.js";
import withStyles from "isomorphic-style-loader/lib/withStyles";
let css = require('./css/dashboard.pcss');


class TabsExampleSwipeable extends React.Component<any,any> {
    state = {
        slideIndex: 0,
    };


    handleChange(value) {
        this.setState({
            slideIndex: value,
        })
    }

    render() {
        return (
            <div id="tabs" className={css.container}>
                <Tabs
                    className={css.tabs}
                    onChange={this.handleChange.bind(this)}
                    value={this.state.slideIndex}>

                    <Tab
                        icon={<InboxIcon />}
                        label="POSTS"
                        value={0}
                    />
                    <Tab icon={<FaceIcon />}
                         label="PEOPLE"
                         value={1}/>

                    <Tab
                        icon={<SettingsIcon />}
                        label="GENERAL"
                        value={2}
                    />
                </Tabs>
                {this.props.children}
            </div>
        );
    }
}


export default withStyles(css)(TabsExampleSwipeable);
