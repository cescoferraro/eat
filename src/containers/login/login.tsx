import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {compose} from "recompose";
import {connect} from "react-redux";
import {TextField} from "redux-form-material-ui";
import {reduxForm, Field} from "redux-form";
import {firebaseConnect, dataToJS, getFirebase} from "react-redux-firebase";
import "rxjs";
import {APP_ACTIONS} from "../../store/actions";


const css = require('./login.pcss');

@withStyles(css)
@reduxForm({
    form: 'loginForm'
})
@connect(state => ({
    app: state.app
}), APP_ACTIONS)
export class Login extends React.Component<any,any> {

    render() {
        console.log(this.props);

        const {handleSubmit}= this.props;
        return (<div className={css.page}>

            <form onSubmit={handleSubmit(this.props.LOGIN.bind(this))}>
                <Field name="email"
                       type="email"
                       floatingLabelText="Email"
                       required
                       id="email"
                       component={TextField}
                       fullWidth={true}
                       floatingLabelFixed={true}
                       hintText="Email"/>
                <Field name="password"
                       type="password"
                       id="passwd-login"
                       required
                       floatingLabelFixed={true}
                       floatingLabelText="Password"
                       fullWidth={true}
                       component={TextField}
                       hintText="Password"/>
                <button
                    style={{height:"100px",width:"100%"}}
                    type="submit">VAI
                </button>
            </form>
        </div>)
    }
}



