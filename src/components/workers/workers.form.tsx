import * as React from "react";
import {compose} from "recompose";
import {Field, reduxForm} from "redux-form";
import {Checkbox, RadioButtonGroup, SelectField, TextField, Toggle, DatePicker} from "redux-form-material-ui";
import {connect} from "react-redux";
import {getFirebase} from "react-redux-firebase";
import {APP_ACTIONS} from "../../store/actions";


export const WorkerForm = compose(
    connect(state => ({
        initialValues: state.workers.editing_worker.worker,
        ID: state.workers.editing_worker.id,
        workersStore: state.workers
    }), APP_ACTIONS),
    reduxForm({form: 'workerForm'})
)(({
    handleSubmit,
    workersStore,
    WORKER_FORM_SUBMIT,
    DELETE_WORKER,
    CloseButton,
    ID
}) => {
    return <div>
        <form>
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
            <Field name="country"
                   floatingLabelText={"Country"}
                   fullWidth={true}
                   component={TextField}
                   hintText="Country"/>


        </form>
        <button onClick={handleSubmit((form)=>
                {WORKER_FORM_SUBMIT(workersStore, form)})}>
            <h2>{workersStore.form_mode}</h2>
        </button>
        <CloseButton/>

        <button onClick={() => {

            DELETE_WORKER(ID)}}>
            <h2>DELETE</h2>
        </button>
    </div>
});


