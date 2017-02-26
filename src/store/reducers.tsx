import {combineReducers} from "redux";
import {firebaseStateReducer} from "react-redux-firebase";
import {reducer} from "./app/reducers";


export const allReducers = combineReducers({
    firebase: firebaseStateReducer,
    app: reducer
});

