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
    }) => (<div>
        <form >
            <Field name="company"
                   fullWidth={true}
                   component={TextField}
                   hintText="Company"
                   floatingLabelText="Company"
            />
            <Field name="title"
                   fullWidth={true}
                   component={TextField}
                   hintText="Title"
                   floatingLabelText="Title"
            />
            <Field name="subtitle"
                   fullWidth={true}
                   component={TextField}
                   hintText="Subtitle"
                   floatingLabelText="Subtitle"
            />
            <Field name="content"
                   fullWidth={true}
                   component={TextField}
                   hintText="Content"
                   floatingLabelText="Content"
            />
            <Field name="url"
                   fullWidth={true}
                   component={TextField}
                   hintText="Url"
                   floatingLabelText="Url"
            />
            <Field name="image"
                   fullWidth={true}
                   component={TextField}
                   hintText="Image"
                   floatingLabelText="Image"
            />

        </form>


        <button onClick={
            handleSubmit((form) =>
                    {JOB_FORM_SUBMIT(jobsStore, form)})}>
            <h2>{jobsStore.form_mode}</h2>
        </button>
        <CloseButton/>
        <button onClick={() => {DELETE_JOB(ID)}}>
            <h2>DELETE</h2>
        </button>
    </div>)
);


