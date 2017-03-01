export const SHOW_WORKER_MODAL_ACTION_NAME = "SHOW_WORKER_MODAL";
export const SHOW_WORKER_MODAL = (payload: boolean) => {
    return {
        type: SHOW_WORKER_MODAL_ACTION_NAME,
        payload: payload
    }
};
export const SET_EDITING_WORKER_ACTION_NAME = "SET_EDITING_WORKER";
export const SET_EDITING_WORKER = (id: string, worker: AppWorker) => {
    return {
        type: SET_EDITING_WORKER_ACTION_NAME,
        payload: {id: id, worker: worker}
    }
};

export const SET_WORKER_FORM_MODE_ACTION_NAME = "SET_WORKER_FORM_MODE";
export const SET_WORKER_FORM_MODE = (payload: string) => {
    return {
        type: SET_WORKER_FORM_MODE_ACTION_NAME,
        payload: payload
    }
};
