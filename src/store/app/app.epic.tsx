import {combineEpics} from "redux-observable";
import "rxjs";


export const pingEpic = action$ =>
    action$.filter(action => action.type === 'PING')
        .mapTo(val => {
            console.log("sgdgf");
            console.log("sgdgf");
            console.log("sgdgf");
            console.log("sgdgf");
            console.log("sgdgf");
            console.log("sgdgf");
            console.log("sgdgf");
            console.log("sgdg==================>=====f");
            return val
        })
        .mapTo({type: 'PONGG'});


