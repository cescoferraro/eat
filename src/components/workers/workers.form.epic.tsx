import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";
import {SHOW_WORKER_MODAL} from "./workers.actions";
import {toastr} from "react-redux-toastr";

export const WORKER_FORM_SUBMIT_ACTION_NAME = "WORKER_FORM_SUBMIT";
export const WORKER_FORM_SUBMIT =
    (workerStore: any, form: AppWorker): Action <{id, form: AppWorker, kind}> => {
        console.log(workerStore);
        return {
            type: WORKER_FORM_SUBMIT_ACTION_NAME,
            payload: {
                id: workerStore.id,
                form: form,
                kind: workerStore.form_mode
            }
        }
    };


export const workerFormEpic = action$ => {
    return action$.ofType(WORKER_FORM_SUBMIT_ACTION_NAME)
        .mergeMap(
            (action: Action<{id, form: AppWorker, kind}>) => {
                console.log(action.payload.id);
                return Observable.fromPromise(
                    getFirebase().database()
                        .ref('workers/' + action.payload.id)
                        .set(action.payload.form)
                )
                    .catch(err => Observable.of(toastr.error('The error title',
                        'The error ' + err)))
                    .mapTo(toastr.success('The title', SuccessMsg(action)))
                    .mapTo(SHOW_WORKER_MODAL(false))
            }
        )
};

const SuccessMsg = action => ('The job ' +
    action.payload.form.title +
    " from the client " +
    action.payload.form.company +
    " got " + action.payload.kind + "ed"
);
