import {combineReducers} from "redux";
import {firebaseStateReducer} from "react-redux-firebase";
import {reducer as formReducer} from "redux-form";
import {JobReducer} from "../components/jobs/jobs.reducer";
import {reducer as toastrReducer} from "react-redux-toastr";
import {WorkersReducer} from "../components/workers/workers.reducer";
import {DashboardReducer} from "../containers/dashboard/dashboard.reducer";

export const allReducers = combineReducers({
    firebase: firebaseStateReducer,
    toastr: toastrReducer,
    form: formReducer,
    jobs: JobReducer,
    dashboard: DashboardReducer,
    workers: WorkersReducer,
});

