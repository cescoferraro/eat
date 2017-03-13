
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
        {path: '/app'}, // object notation
        {path: '/workers'}, // object notation
        {path: '/jobs'} // object notation
    ]),
    connect(
        ({firebase}) => ({
            // Connect todos prop to firebase todos
            general: dataToJS(firebase, '/app'),
            jobs: dataToJS(firebase, '/jobs'),
            workers: dataToJS(firebase, '/workers'),
        })
    )
)(({general, jobs, push, workers}) => {
    return (<div>
        <LoginButton
            css={css.loginButton}
            push={push}/>
        <Story
            workers={workers}
            jobs={jobs}
            app={general}/>
    </div>)
});





