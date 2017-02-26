declare let firebase, require: any;
import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {connect} from "react-redux";
import {firebaseConnect, dataToJS} from "react-redux-firebase";
import {Story} from "../../components/story/story";
import {LoginButton} from "../../components/LoginButton/login.button";
import {compose} from "recompose";


const css = require('./css/home.pcss');


export const HomeComponent = compose(
    withStyles(css),
    firebaseConnect([
        {path: '/app'} // object notation
    ]),
    connect(
        ({firebase}) => ({
            // Connect todos prop to firebase todos
            app: dataToJS(firebase, '/app'),
        })
    )
)(props => {
    console.log(props);
    return (<div>
        <LoginButton
            css={css.loginButton}
            push={props.push}/>
        <Story app={props.app}/>
    </div>)
});





