import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";


export const LOGIN_ACTION_NAME = "LOGIN";
export function LOGIN_ACTION(form): Action<any> {
    return {
        type: LOGIN_ACTION_NAME,
        payload: form
    }
}


export const loginEpic = action$ =>
    action$
        .ofType(LOGIN_ACTION_NAME)
        .mergeMap(action =>
            Observable.fromPromise(
                getFirebase().auth()
                    .signInWithEmailAndPassword(
                        action.payload.email, action.payload.password)
            )
                .catch(() => {
                    return Observable.empty()
                }) .mapTo(push("/dashboard/jobs"))
        );

