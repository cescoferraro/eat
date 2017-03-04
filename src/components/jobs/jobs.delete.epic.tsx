import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";
import {SHOW_MODAL} from "./jobs.actions";
import {toastr} from "react-redux-toastr";

export const DELETE_JOB_ACTION_NAME = "DELETE_JOB";
export const DELETE_JOB =
    (id: string): Action <string> => {
        return {
            type: DELETE_JOB_ACTION_NAME,
            payload: id
        }
    };


export const jobDeleteEpic = action$ => {
    return action$.ofType(DELETE_JOB_ACTION_NAME)
        .mergeMap(
            (action: Action<string>) => {

                return Observable.fromPromise(
                    getFirebase().database()
                        .ref('jobs/' + action.payload)
                        .remove()
                )
                    .catch(err => Observable.of(toastr.error('The error title',
                        'The error ' + err)))
                    .mapTo(toastr.success('The title', action.payload + " just got deleted"))
                    .mapTo(SHOW_MODAL(false))
            }
        )
};

