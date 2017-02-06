import * as React from "react";
import {ssrBehavior} from "react-md-spinner";

export let HEAD = ({title, css, userAgent}) => {

    let type = "text/javascript";
    let config = {
        apiKey: "AIzaSyBxg-ZN4_K2t1pUXWeXL9hwzl42LO94McY",
        authDomain: "weareeat-9fd66.firebaseapp.com",
        databaseURL: "https://weareeat-9fd66.firebaseio.com",
        storageBucket: "weareeat-9fd66.appspot.com",
        messagingSenderId: "677035655043"
    };

    let init = "firebase.initializeApp(config)";
    let frase = "var config = " + require('serialize-javascript')(config) + ";" + init;
    return (<head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="icons/favicon.ico"/>
        <title>{title}</title>

        <script src="https://www.gstatic.com/firebasejs/3.6.8/firebase.js"></script>
        <script type={type} dangerouslySetInnerHTML={{__html:frase}}/>

        <style type="text/css"
               dangerouslySetInnerHTML={ {__html: ssrBehavior.getStylesheetString(userAgent)} }></style>
        <style type="text/css"
               dangerouslySetInnerHTML={ {__html: css.join('')} }></style>

    </head>)
};
