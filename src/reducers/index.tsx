import {createStore, combineReducers, compose} from "redux";
import {reduxReactFirebase, firebaseStateReducer} from "redux-react-firebase";
import {DASH_OBJECT} from "./dashboard";

interface allReducersType {
    dashboard: DASH_OBJECT
}


let config = {
    apiKey: "AIzaSyBxg-ZN4_K2t1pUXWeXL9hwzl42LO94McY",
    authDomain: "weareeat-9fd66.firebaseapp.com",
    databaseURL: "https://weareeat-9fd66.firebaseio.com"
};


export const createStoreWithFirebase = compose(
    reduxReactFirebase(config),
)(createStore);


export const allReducers = combineReducers({
    firebase: firebaseStateReducer
});


export const allReducersInitial = {};


