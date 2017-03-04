import {SHOW_MODAL_ACTION_NAME, SET_EDITING_JOB_ACTION_NAME, SET_FORM_MODE_ACTION_NAME} from "./jobs.actions";
import {JobFactory} from "./jobs.factory";


export let initialJobReducer = {
    modal: false,
    editing_job: {id: "sdfsdf", job: new JobFactory()},
    form_mode: "add"
};

export const JobReducer = (state, action: any = {}) => {
    switch (action.type) {
        case SHOW_MODAL_ACTION_NAME:
            return {...state, modal: action.payload};
        case SET_EDITING_JOB_ACTION_NAME:
            return {...state, editing_job: action.payload};
        case SET_FORM_MODE_ACTION_NAME:
            return {...state, form_mode: action.payload};
        default:
            return {...state}
    }
};
