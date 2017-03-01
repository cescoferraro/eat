import {combineEpics} from "redux-observable";
import "rxjs";
import {loginEpic} from "../containers/login/login.epic";
import {logoutEpic} from "../containers/shell/logout.epic";
import {jobDeleteEpic} from "../components/jobs/jobs.delete.epic";
import {jobsFormEpic} from "../components/jobs/jobs.form.epic";
import {generalFormEpic} from "../components/general/general.form.epic";
import {workerFormEpic} from "../components/workers/workers.form.epic";
import {workerDeleteEpic} from "../components/workers/workers.delete.epic";


export const RootEpic = combineEpics(
    loginEpic,
    logoutEpic,
    jobDeleteEpic,
    jobsFormEpic,
    generalFormEpic,
    workerDeleteEpic,
    workerFormEpic
);


