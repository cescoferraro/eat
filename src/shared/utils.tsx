import * as React from "react";
declare const navigator: any;
import MDSpinner from "react-md-spinner";

let isServer = () => !(typeof window !== "undefined" && window.document);

let Utils = {
    FIREBASE_CONFIG: {
        apiKey: "AIzaSyBxg-ZN4_K2t1pUXWeXL9hwzl42LO94McY",
        authDomain: "weareeat-9fd66.firebaseapp.com",
        databaseURL: "https://weareeat-9fd66.firebaseio.com",
        storageBucket: "weareeat-9fd66.appspot.com",
        messagingSenderId: "677035655043"
    },
    isServer: isServer,
    GetCode: (nam) => {
        let name;
        if (!Utils.isServer()) {
            if (name = (new RegExp("[?&]" + encodeURIComponent(nam) + "=([^&]*)")).exec(location.search)) {
                return decodeURIComponent(name[1]);
            }
        }
        return null;
    }
};


export default Utils;



