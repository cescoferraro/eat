import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";
import {SHOW_WORKER_MODAL} from "./workers.actions";
import {toastr} from "react-redux-toastr";

export const DELETE_WORKER_ACTION_NAME = "DELETE_WORKER";
export const DELETE_WORKER =
    (id: string): Action <string> => {
        return {
            type: DELETE_WORKER_ACTION_NAME,
            payload: id
        }
    };


export const workerDeleteEpic = action$ => {
    return action$.ofType(DELETE_WORKER_ACTION_NAME)
        .mergeMap(
            (action: Action<string>) => {

                return Observable.fromPromise(
                    getFirebase().database()
                        .ref('workers/' + action.payload)
                        .remove()
                )
                    .catch(err => Observable.of(toastr.error('The error title',
                        'The error ' + err)))
                    .mapTo(toastr.success('The title', action.payload + " just got deleted"))
                    .mapTo(SHOW_WORKER_MODAL(false))
            }
        )
};

