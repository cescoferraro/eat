import {combineReducers} from "redux";
import {firebaseStateReducer} from "react-redux-firebase";
import {reducer as formReducer} from "redux-form";
import {JobReducer} from "../components/jobs/jobs.reducer";

export const allReducers = combineReducers({
    firebase: firebaseStateReducer,
    jobs: JobReducer,
    form: formReducer
});

