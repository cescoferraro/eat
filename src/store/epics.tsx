import {combineEpics} from "redux-observable";
import "rxjs";
import {loginEpic} from "../containers/login/login.epic";
import {logoutEpic} from "../containers/shell/logout.epic";
import {jobDeleteEpic} from "../components/jobs/jobs.delete.epic";
import {jobsFormEpic} from "../components/jobs/jobs.form.epic";


export const RootEpic = combineEpics(
    loginEpic, logoutEpic, jobDeleteEpic, jobsFormEpic
);


