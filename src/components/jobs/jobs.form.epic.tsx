import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";
import {SHOW_MODAL} from "./jobs.actions";


export const JOB_FORM_SUBMIT_ACTION_NAME = "JOB_FORM_SUBMIT";
export const JOB_FORM_SUBMIT =
    (id: string, form: Job, isDelete = false): Action <{id, form, isDelete}> => {
        return {
            type: JOB_FORM_SUBMIT_ACTION_NAME,
            payload: {id: id, form: form, isDelete: isDelete}
        }
    };


export const jobsFormEpic = action$ => {
    return action$.ofType(JOB_FORM_SUBMIT_ACTION_NAME)
        .mergeMap(
            (action: Action<{id, form, isDelete}>) => {

                return Observable.fromPromise(
                    getFirebase().database()
                        .ref('jobs/' + action.payload.id)
                        .set(action.payload.form)
                )
                    .catch(err => {
                        console.log(err);
                        return Observable.empty()
                    }) .mapTo(SHOW_MODAL(false))
            }
        )
};

