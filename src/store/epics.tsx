import {combineEpics} from "redux-observable";
import "rxjs";
import {pingEpic} from "./app/app.epic";


export const RootEpic = combineEpics(
    pingEpic
);


