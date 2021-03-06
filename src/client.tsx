declare const NODE_ENV, module, require, window: any;
import * as React from "react";
import SpotifyApp from "./app";
import {AppContainer} from "react-hot-loader";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {allReducers, allReducersInitial, createStoreWithFirebase} from "./reducers/index";
import Router from "react-router/BrowserRouter";
import WithStylesContext from "./shared/stylesComponent";
import {StyleRoot} from "radium";
import {withAsyncComponents} from "react-async-component";
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const theme = getMuiTheme({}, {userAgent: navigator.userAgent});
const rootEl = document.getElementById("container");

import * as firebase from "firebase"
console.log(firebase);
// const store = createStore(allReducers, allReducersInitial, reduxDevTools);
const store = createStoreWithFirebase(allReducers, allReducersInitial, reduxDevTools);

injectTapEventPlugin();

const renderApp = NextApp => {
    let app = <AppContainer>
        <WithStylesContext onInsertCss={styles => styles._insertCss()}>
            <MuiThemeProvider muiTheme={theme}>
                <Provider store={store}>
                    <Router>

                        {NextApp}
                    </Router>
                </Provider>
            </MuiThemeProvider>
        </WithStylesContext>
    </AppContainer>;
    withAsyncComponents(app).then(({appWithAsyncComponents}) =>
        render(appWithAsyncComponents, rootEl),
    );
};


renderApp(SpotifyApp(navigator.userAgent));


if (module.hot) {
    module.hot.accept("./app.tsx", () => {
        const NextApp = require("./app.tsx").default;
        renderApp(NextApp(navigator.userAgent));
    });
}
