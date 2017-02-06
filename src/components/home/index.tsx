import {createAsyncComponent} from "react-async-component";
import * as React from "react";
import {Spinner} from "../spinner/index";

export const AsyncHome = userAgent => createAsyncComponent({
    resolve: () => new Promise(resolve =>
        require.ensure([], (require) => {
            resolve(require("./home"));
        }, "home.js")),
    defer: false,
    Loading: (prop) => <Spinner userAgent={userAgent}/>
});

