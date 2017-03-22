import *  as injectTapEventPlugin from "react-tap-event-plugin";
import { createStore } from "redux";
import * as React from "react";
import { TideApp } from "../components/App";
import * as ReactDOMServer from "react-dom/server";
import { HTML } from "../components/universal/html";
import createServerRenderContext from "react-router/createServerRenderContext";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { UniversalStyleProvider } from "../components/UniversalStyleProvider";
import { StyleRoot } from "radium";
import { withAsyncComponents } from "react-async-component";
import { StaticRouter } from "react-router-dom";
injectTapEventPlugin();


export default () => (request, response) => {
    const context = createServerRenderContext();
    const result = context.getResult();
    if (result.redirect) {
        let url = `${result.redirect.pathname}${result.redirect.followLabelTopN}`;
        response.redirect(302, url);
    } else {

        if (result.missed) {
            response.status(404);
        } else {
            response.status(200);

        }
        let the = createStore((state, action) => {
            return state
        }, {});
        let css = []; // CSS for all rendered React compone, reduxDevTools
        // nts
        let userAgent = request.headers['user-agent'];
        let ServerApp =
            <UniversalStyleProvider onInsertCss={styles => css.push(styles._getCss())}>
                <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: userAgent })}>
                    <Provider store={the}>
                        <StaticRouter location={request.url} context={context}>
                            <TideApp userAgent={userAgent} />
                        </StaticRouter>
                    </Provider>
                </MuiThemeProvider>
            </UniversalStyleProvider>;


        withAsyncComponents(ServerApp)
            .then((result) => {
                response.send("<!DOCTYPE html>" +
                    ReactDOMServer.renderToStaticMarkup(
                        <HTML userAgent={userAgent} css={css} result={result} />
                    ));
            });


    }
};
