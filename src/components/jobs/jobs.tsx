import * as React from "react";
import {compose} from "recompose";
import {StyleConnect} from "../StyleConnect";
import {connect} from "react-redux";
import {List, ListItem} from "material-ui/List";
import {grey400, darkBlack, lightBlack} from "material-ui/styles/colors";
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from "react-redux-firebase";
import {JobList} from "./jobs.list";
import {JobFactory} from "./jobs.factory";
import {APP_ACTIONS} from "../../store/actions";
import {JobModal} from "./jobs.modal";
import {AddJobButton} from "./add.job.button";
const css = require("./jobs.pcss");


export const JobsComponent = compose(
    StyleConnect(css),
    firebaseConnect([
        '/jobs'
        // { path: '/todos' } // object notation
    ]),
    connect(
        ({firebase, jobs}) => ({
            // Connect todos prop to firebase todos
            jobs: dataToJS(firebase, '/jobs'),
            jobsStore: jobs,
        }), APP_ACTIONS
    )
)(({
    jobs = [new JobFactory()],
    jobsStore,
    SET_EDITING_JOB,
    DELETE_JOB,
    SHOW_JOBS_MODAL,
    JOB_FORM_SUBMIT,
    SET_FORM_MODE
}) => {
    return <div id="jobs" className={css.container}>


        <JobList
            DELETE_JOB={DELETE_JOB}
            SET_FORM_MODE={SET_FORM_MODE}
            SET_EDITING_JOB={SET_EDITING_JOB}
            SHOW_JOBS_MODAL={SHOW_JOBS_MODAL}
            jobs={jobs}/>

        <JobModal
            JOB_FORM_SUBMIT={JOB_FORM_SUBMIT}
            SHOW_JOBS_MODAL={SHOW_JOBS_MODAL}
            jobsStore={jobsStore}/>
        <AddJobButton
            SET_FORM_MODE={SET_FORM_MODE}
            SET_EDITING_JOB={SET_EDITING_JOB}
            SHOW_JOBS_MODAL={SHOW_JOBS_MODAL}
            css={css}/>
    </div>

});



