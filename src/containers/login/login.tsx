import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {compose} from "recompose";
const css = require('./login.pcss');


export const Login = compose(
    withStyles(css)
)(({}) => {

    return <div className={css.page}>
        <h2>LOGIN</h2>
        <h2>LOGIN</h2>
    </div>
})
