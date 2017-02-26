import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {compose} from "recompose";
import {connect} from "react-redux";
import {firebaseConnect, dataToJS, getFirebase} from "react-redux-firebase";
const css = require('./login.pcss');
export const Login = compose(
    withStyles(css)
)(({}) => {
        return <div className={css.page}>
            <h2>LOGIN</h2>
            <button onClick={LOGIN}>VAI</button>
            <h2>LOGIN</h2>
        </div>
    }
);


let LOGIN = () => {
    getFirebase().auth()
        .signInWithEmailAndPassword("cesco@gmail.com", "cesco12")
        .then(user => {
            console.log(user);
        })
        .catch(function (error) {
            console.log(error);
            // Handle Errors here.
        });
};
