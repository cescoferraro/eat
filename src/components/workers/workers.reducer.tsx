import {guid} from "../../shared/guid";
import {WorkersFactory} from "./workers.factory";
import {
    SET_WORKER_FORM_MODE_ACTION_NAME,
    SET_EDITING_WORKER_ACTION_NAME,
    SHOW_WORKER_MODAL_ACTION_NAME
} from "./workers.actions";


export let initialWorkerReducer = {
    modal: false,
    editing_worker: {id: guid(), worker: new WorkersFactory()},
    form_mode: "add"
};

export const WorkersReducer = (state, action: any = {}) => {
    switch (action.type) {
        case SHOW_WORKER_MODAL_ACTION_NAME:
            return {...state, modal: action.payload};
        case SET_EDITING_WORKER_ACTION_NAME:
            console.log(action.payload);
            return {
                ...state,
                id: action.payload.id,
                editing_worker: action.payload.editing_worker
            };
        case SET_WORKER_FORM_MODE_ACTION_NAME:
            return {...state, form_mode: action.payload};
        default:
            return {...state}
    }
};
