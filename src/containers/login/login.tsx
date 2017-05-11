import * as React from "react";
import { compose } from "recompose";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import { TextField } from "redux-form-material-ui";
import { reduxForm, Field } from "redux-form";
import { firebaseConnect, dataToJS, getFirebase } from "react-redux-firebase";
import { push } from "connected-react-router";
import "rxjs";
import { APP_ACTIONS } from "../../store/actions";
const css = require('./login.pcss');


export const Login = compose(
    withStyles(css),
    reduxForm({
        form: 'loginForm'
    }),
    connect(({ app, firebase }) => ({
        app: app,
        firebase: firebase
    }), APP_ACTIONS)
)(({ handleSubmit, firebase, dispatch, LOGIN }) => {
    return (<div className={css.page}>
        {firebase.get("auth") != null ?
            <div >
                {redirect(dispatch)}
                <button onClick={() => {
                    dispatch(push("/dashboard/jobs"))
                }}>
                    <h2>JUST GET IN!</h2>
                </button>
            </div> :
            <form onSubmit={handleSubmit(LOGIN.bind(this))}>
                <Field name="email"
                    type="email"
                    floatingLabelText="Email"
                    required
                    id="email"
                    component={TextField}
                    fullWidth={true}
                    floatingLabelFixed={true}
                    hintText="Email" />
                <Field name="password"
                    type="password"
                    id="passwd-login"
                    required
                    floatingLabelFixed={true}
                    floatingLabelText="Password"
                    fullWidth={true}
                    component={TextField}
                    hintText="Password" />
                <button
                    style={{ height: "100px", width: "100%" }}
                    type="submit">VAI
                </button>
            </form>}
    </div>)
});

const redirect = (dispatch) => {
    setTimeout(() => {
        dispatch(push("/dashboard/jobs"));
    }, 2000)
};
