import {tag} from "./shared/tag";
import * as React from "react";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {App} from "./app";
import {Renderer} from "./render";
import {unmountComponentAtNode} from "react-dom";
declare const module, require: any;
injectTapEventPlugin();


Renderer(App({userAgent: navigator.userAgent}));

if (module.hot) {
    module.hot.accept(
        [
            "./store/store.tsx",
            "./app.tsx",
            "./render.tsx"
        ]
        , () => {
            unmountComponentAtNode(tag);
            const NextEatApp = require("./app.tsx").App;
            const NewRenderer = require("./render.tsx").Renderer;
            NewRenderer(NextEatApp({userAgent: navigator.userAgent}));
        });
}
