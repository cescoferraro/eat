import {createAsyncComponent} from "react-async-component";
import * as React from "react";
import {Spinner} from "../../components/spinner/index";

export const AsyncLogin = userAgent => createAsyncComponent({
    resolve: () => new Promise(resolve =>
        require.ensure([], (require) => {
            resolve(require("./login.tsx").Login);
        }, "login.js")),
    defer: true,
    ssrMode: "defer",
    Loading: (prop) => <Spinner userAgent={userAgent}/>
});
