export const SHOW_MODAL_ACTION_NAME = "SHOW_MODAL";
export const SHOW_MODAL = (payload: boolean) => {
    return {
        type: SHOW_MODAL_ACTION_NAME,
        payload: payload
    }
};
export const SET_EDITING_JOB_ACTION_NAME = "SET_EDITING_JOB";
export const SET_EDITING_JOB = (id: string, payload: Job) => {
    return {
        type: SET_EDITING_JOB_ACTION_NAME,
        payload: {id: id, job: payload}
    }
};

export const SET_FORM_MODE_ACTION_NAME = "SET_FORM_MODE";
export const SET_FORM_MODE = (payload: string) => {
    return {
        type: SET_FORM_MODE_ACTION_NAME,
        payload: payload
    }
};
