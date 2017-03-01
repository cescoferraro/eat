import {createAsyncComponent} from "react-async-component";
import * as React from "react";
import {Spinner} from "../spinner/index";


export const AsyncToaster = userAgent => createAsyncComponent({
    resolve: () => new Promise(resolve =>
        require.ensure([], (require) => {
            resolve(require("./toaster.tsx").Toaster);
        }, "toaster.js")),
    defer: true,
    Loading: (prop) => <Spinner userAgent={userAgent}/>
});
