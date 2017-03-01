import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";
import {toastr} from "react-redux-toastr";

export const GENERAL_FORM_SUBMIT_ACTION_NAME = "GENERAL_FORM_SUBMIT";
export const GENERAL_FORM_SUBMIT = (form: App): Action <any> => {
    return {
        type: GENERAL_FORM_SUBMIT_ACTION_NAME,
        payload: form
    }
};


export const generalFormEpic = action$ => {
    return action$.ofType(GENERAL_FORM_SUBMIT_ACTION_NAME)
        .mergeMap(
            (action: Action<any>) => {

                return Observable.fromPromise(
                    getFirebase().database()
                        .ref('app/')
                        .set(action.payload)
                )
                    .catch(err => Observable.of(toastr.error('The error title',
                        'The error ' + err)))
                    .mapTo(toastr.success('The title', "App general info just got updated"))
                    .mapTo({type: "sdfsdf"})
            }
        )
};


