import * as React from "react";
import {compose} from "recompose";
import {Field, reduxForm} from "redux-form";
import {Checkbox, RadioButtonGroup, SelectField, TextField, Toggle, DatePicker} from "redux-form-material-ui";
import {connect} from "react-redux";
import {getFirebase} from "react-redux-firebase";
import {APP_ACTIONS} from "../../store/actions";


export const JobForm = compose(
    connect(state => ({
        initialValues: state.jobs.editing_job.job,
        ID: state.jobs.editing_job.id
    }), APP_ACTIONS),
    reduxForm({form: 'jobForm'})
)(({
    handleSubmit,
    JOB_FORM_SUBMIT,
    jobsStore,
    CloseButton,
    DELETE_JOB,
    ID
}) => {
    const submit = (form) => {
        JOB_FORM_SUBMIT(jobsStore.editing_job.id, form);
    };
    const DELETE = () => {
        DELETE_JOB(ID);
    };
    return <div>
        <h2>form!!!!</h2>
        <form onSubmit={handleSubmit(submit)}>
            <Field name="company"
                   fullWidth={true}
                   component={TextField}
                   hintText="Company"/>
            <Field name="title"
                   fullWidth={true}
                   component={TextField}
                   hintText="Title"/>
            <Field name="subtitle"
                   fullWidth={true}
                   component={TextField}
                   hintText="Subtitle"/>
            <Field name="content"
                   fullWidth={true}
                   component={TextField}
                   hintText="Content"/>
            <Field name="url"
                   fullWidth={true}
                   component={TextField} hintText="Url"/>
            <Field name="image"
                   fullWidth={true}
                   component={TextField}
                   hintText="Image"/>
            <button type="submit">
                <h2>{jobsStore.form_mode}</h2>
            </button>
            <CloseButton/>

        </form>
        <button onClick={DELETE}>
            <h2>DELETE</h2>
        </button>
    </div>
});

