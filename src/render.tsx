declare const NODE_ENV, module, require, window: any;
import * as React from "react";
import {AppContainer} from "react-hot-loader";
import {render} from "react-dom";
import {Provider} from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {store} from "./store/store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import WithStylesContext from "./shared/stylesComponent";
import {BrowserRouter} from "react-router-dom";
import {createBrowserHistory} from "history";
import {ConnectedRouter} from "connected-react-router";

export const Renderer = NextEatApp => {
    const history = createBrowserHistory();
    let app = <AppContainer>
        <WithStylesContext onInsertCss={styles => styles._insertCss()}>
            <MuiThemeProvider muiTheme={getMuiTheme({userAgent: navigator.userAgent})}>
                <Provider store={store(history)}>
                    <ConnectedRouter history={history}>
                        {NextEatApp}
                    </ConnectedRouter>
                </Provider>
            </MuiThemeProvider>
        </WithStylesContext>
    </AppContainer>;
    render(app, document.getElementById("container"))
};
