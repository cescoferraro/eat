import {allReducers} from "./reducers";
import {createStore, applyMiddleware, compose} from "redux";
import {reactReduxFirebase, firebaseStateReducer} from "react-redux-firebase";
import {createEpicMiddleware} from "redux-observable";
import {RootEpic} from "./epics";

declare let window, module: any;

let config = {
    apiKey: "AIzaSyBxg-ZN4_K2t1pUXWeXL9hwzl42LO94McY",
    authDomain: "weareeat-9fd66.firebaseapp.com",
    databaseURL: "https://weareeat-9fd66.firebaseio.com"
};


const FirebaseStoreCreator = compose(
    reactReduxFirebase(config)
)(createStore);


let ReplacebleEpicMiddleware = createEpicMiddleware(RootEpic);


export const store = () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = FirebaseStoreCreator(allReducers, {},
        composeEnhancers(
            applyMiddleware(ReplacebleEpicMiddleware)
        ));

    if (module.hot) {
        module.hot.accept(['./reducers.tsx', "./epics.tsx"], () => {
            const nextRootEpic = require('./epics.tsx').RootEpic;
            const nextRootReducer = require('./reducers.tsx').allReducers;
            store.replaceReducer(nextRootReducer);
            ReplacebleEpicMiddleware.replaceEpic(nextRootEpic);
        });
    }


    return store
};
