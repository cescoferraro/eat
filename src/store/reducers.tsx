import {combineReducers} from "redux";
import {firebaseStateReducer} from "react-redux-firebase";
import {reducer as formReducer} from "redux-form";
import {JobReducer} from "../components/jobs/jobs.reducer";
import {reducer as toastrReducer} from "react-redux-toastr";
import {WorkersReducer} from "../components/workers/workers.reducer";

export const allReducers = combineReducers({
    firebase: firebaseStateReducer,
    jobs: JobReducer,
    workers: WorkersReducer,
    form: formReducer,
    toastr: toastrReducer
});

