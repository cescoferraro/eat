import {bindActionCreators} from "redux";
import {LOGIN_ACTION} from "../containers/login/login.epic";
import {LOGOUT_ACTION} from "../containers/shell/logout.epic";
import {SHOW_MODAL, SET_EDITING_JOB, SET_FORM_MODE} from "../components/jobs/jobs.actions";
import {JOB_FORM_SUBMIT} from "../components/jobs/jobs.form.epic";
import {DELETE_JOB} from "../components/jobs/jobs.delete.epic";
import {GENERAL_FORM_SUBMIT} from "../components/general/general.form.epic";
import {SET_WORKER_FORM_MODE, SET_EDITING_WORKER, SHOW_WORKER_MODAL} from "../components/workers/workers.actions";
import {WORKER_FORM_SUBMIT} from "../components/workers/workers.form.epic";
import {DELETE_WORKER} from "../components/workers/workers.delete.epic";

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        LOGIN: LOGIN_ACTION,
        LOGOUT: LOGOUT_ACTION,
        SHOW_JOBS_MODAL: SHOW_MODAL,
        SET_EDITING_JOB: SET_EDITING_JOB,
        SET_FORM_MODE: SET_FORM_MODE,
        JOB_FORM_SUBMIT: JOB_FORM_SUBMIT,
        DELETE_JOB: DELETE_JOB,

        GENERAL_FORM_SUBMIT: GENERAL_FORM_SUBMIT,


        SHOW_WORKER_MODAL: SHOW_WORKER_MODAL,
        SET_EDITING_WORKER: SET_EDITING_WORKER,
        SET_WORKER_FORM_MODE: SET_WORKER_FORM_MODE,
        WORKER_FORM_SUBMIT: WORKER_FORM_SUBMIT,
        DELETE_WORKER: DELETE_WORKER,
    }, dispatch);
};
