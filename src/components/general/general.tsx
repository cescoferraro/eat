import * as React from "react";
import {compose} from "recompose";
import {StyleConnect} from "../StyleConnect";
import {connect} from "react-redux";
import {List, ListItem} from "material-ui/List";
import {grey400, darkBlack, lightBlack} from "material-ui/styles/colors";
import {firebaseConnect, isLoaded, isEmpty, dataToJS, getFirebase} from "react-redux-firebase";
import {APP_ACTIONS} from "../../store/actions";
import {defaultAPP} from "../../shared/default.app";
import {Field, reduxForm} from "redux-form";
import {Checkbox, RadioButtonGroup, SelectField, TextField, Toggle, DatePicker} from "redux-form-material-ui";
import {toastr} from "react-redux-toastr";
const css = require("./general.pcss");

export const General = compose(
    StyleConnect(css),
    firebaseConnect([
        '/app'
        // { path: '/todos' } // object notation
    ]),
    connect(
        ({firebase}) => ({
            // Connect tojobsdos prop to firebase todos
            initialValues: dataToJS(firebase, '/app'),
            app: dataToJS(firebase, '/app')
        }), APP_ACTIONS
    ),
    reduxForm({form: 'jobForm'})
)(({
    GENERAL_FORM_SUBMIT,
    app = defaultAPP,
    handleSubmit
}:
    {
        app: App,
        handleSubmit,
        GENERAL_FORM_SUBMIT
    }) => {

    const submit = (form) => {
        GENERAL_FORM_SUBMIT(form);
        console.info(form)
    };
    return <div id="jobs" className={css.container}>
        <form onSubmit={handleSubmit(submit)}>
            <Field name="title"
                   fullWidth={true}
                   component={TextField}
                   hintText="Title"/>
            <Field name="subtitle"
                   fullWidth={true}
                   component={TextField}
                   hintText="Subtitle"/>
            <Field name="url"
                   fullWidth={true}
                   component={TextField} hintText="Url"/>
            <Field name="quote"
                   fullWidth={true}
                   component={TextField}
                   hintText="quote"/>

            <Field name="author"
                   fullWidth={true}
                   component={TextField}
                   hintText="author"/>
            <button type="submit">
                <h2>UPDATE</h2>
            </button>
        </form>
    </div>

});



