import * as React from "react";
import Utils from "../../shared/utils";


export let BODY = ({content, STATE_IDENTIFIER, state}) => {
    let async = "window." + STATE_IDENTIFIER + "=" + state + ";";
    let type = "text/javascript";
    let config = require('serialize-javascript')(Utils.FIREBASE_CONFIG);
    let init = "firebase.initializeApp(config)";
    let frase = "var config = " + require('serialize-javascript')(config) + ";" + init;
    return <body>
    <div id="container" dangerouslySetInnerHTML={ {__html: content} }/>
    <script type={type} dangerouslySetInnerHTML={{__html:async}}/>
    <script type={type} src="vendor.js"/>
    <script type={type} src="js/app.bundle.js"/>
    </body>
};
