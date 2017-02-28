import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";
import {SHOW_MODAL} from "./jobs.actions";


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
                console.log(action.payload);

                return Observable.fromPromise(
                    getFirebase().database()
                        .ref('jobs/' + action.payload)
                        .remove()
                )
                    .catch(err => {
                        console.log(err);
                        return Observable.empty()
                    })
                    .mapTo(SHOW_MODAL(false))
            }
        )
};

