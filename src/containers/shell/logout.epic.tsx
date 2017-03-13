import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";


export const LOOUT_ACTION_NAME = "LOGOUT";
export function LOGOUT_ACTION(): Action<any> {
    return {
        type: LOOUT_ACTION_NAME,
        payload: null
    }
}


export const logoutEpic = action$ =>
    action$
        .ofType(LOOUT_ACTION_NAME)
        .mergeMap(action =>
            Observable.fromPromise(
                getFirebase().auth().signOut()
            ).catch(() => {
                return Observable.empty()
            }) .mapTo(push("/"))
        );

