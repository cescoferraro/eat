import {initialJobReducer} from "../components/jobs/jobs.reducer";
import {initialWorkerReducer} from "../components/workers/workers.reducer";
export const startup = {
    jobs: initialJobReducer,
    workers: initialWorkerReducer
};
