import * as React from "react";
import {compose} from "recompose";
import {Field, reduxForm} from "redux-form";
import {Checkbox, RadioButtonGroup, SelectField, TextField, Toggle, DatePicker} from "redux-form-material-ui";
import {connect} from "react-redux";
import {getFirebase} from "react-redux-firebase";
import {APP_ACTIONS} from "../../store/actions";


export const WorkerForm = compose(
    connect(state => ({
        initialValues: state.workers.editing_worker,
        ID: state.workers.editing_worker.id,
        workersStore: state.workers
    }), APP_ACTIONS),
    reduxForm({form: 'workerForm'})
)(({
    handleSubmit,
    workersStore,
    WORKER_FORM_SUBMIT,
    CloseButton,
    ID
}) => {
    return <div>
        <h2>form!!!!</h2>
        <form onSubmit={handleSubmit((form)=>
                {WORKER_FORM_SUBMIT(workersStore, form)})}>
            <Field name="name"
                   fullWidth={true}
                   floatingLabelText={"Name"}
                   component={TextField}
                   hintText="Name"/>
            <Field name="job"
                   floatingLabelText={"Job"}
                   fullWidth={true}
                   component={TextField}
                   hintText="Job"/>
            <Field name="avatar"
                   floatingLabelText={"Avatar"}
                   fullWidth={true}
                   component={TextField}
                   hintText="Avatar"/>
            <button type="submit">
                <h2>{workersStore.form_mode}</h2>
            </button>
            <CloseButton/>

        </form>
    </div>
});


