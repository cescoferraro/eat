import * as React from "react";
import {Tabs, Tab} from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import FaceIcon from "material-ui/svg-icons/action/face.js";
import InboxIcon from "material-ui/svg-icons/content/inbox.js";
import SettingsIcon from "material-ui/svg-icons/action/settings.js";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {withRouter} from "react-router";
const css = require("./tabs.pcss");

@withRouter
@withStyles(css)
@connect(state => ({
    app: state.app
}))
export class TabsExampleSwipeable extends React.Component<any,any> {
    state = {
        slideIndex: 0,
    };

    componentWillMount() {
        switch (this.props.computedMatch.url) {
            case "/dashboard/jobs":
                this.setState({
                    slideIndex: 0,
                });
                break;
            case "/dashboard/workers":
                this.setState({
                    slideIndex: 1,
                });
                break;
            case "/dashboard/general":
                this.setState({
                    slideIndex: 2,
                });
                break;
        }
    }

    handleChange(value) {
        this.setState({
                slideIndex: value,
            },
            () => {
                switch (value) {
                    case 0:
                        this.props.dispatch(push("/dashboard/jobs"));
                        break;
                    case 1:
                        this.props.dispatch(push("/dashboard/workers"));
                        break;
                    case 2:
                        this.props.dispatch(push("/dashboard/general"));
                        break;
                }
            }
        );

    }

    render() {
        return (
            <div id="tabs"
                 className={css.container}>
                <Tabs
                    className={css.tabs}
                    onChange={this.handleChange.bind(this)}
                    value={this.state.slideIndex}>

                    <Tab
                        icon={<InboxIcon />}
                        label="JOBS"
                        value={0}
                    />
                    <Tab icon={<FaceIcon />} label="WORKERS" value={1}/>

                    <Tab
                        icon={<SettingsIcon />}
                        label="GENERAL"
                        value={2}
                    />
                </Tabs>
                <SwipeableViews
                    className={css.container}
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange.bind(this)}>
                    {this.props.children}
                </SwipeableViews>
            </div>
        );
    }
}


export default TabsExampleSwipeable;
