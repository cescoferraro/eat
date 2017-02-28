import {createAsyncComponent} from "react-async-component";
import * as React from "react";
import {Spinner} from "../../components/spinner/index";


export const AsyncDashboard = userAgent => createAsyncComponent({
    resolve: () => new Promise(resolve =>
        require.ensure([], (require) => {
            resolve(require("./dashboard.tsx").Dashboard);
        }, "dashboard.js")),
    Loading: (prop) => <Spinner userAgent={userAgent}/>
});
