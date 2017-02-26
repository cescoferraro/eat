import * as React from "react";
import {ssrBehavior} from "react-md-spinner";
import {FirebaseInit} from "../../shared/firebase.config";

export let HEAD = ({title, css, userAgent}) => {
    let type = "text/javascript";
    return (<head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="icons/favicon.ico"/>
        <title>{title}</title>
        <Styler rules={ssrBehavior.getStylesheetString(userAgent)}/>
        <Styler rules={css.join('')}/>
    </head>)
};


let Styler = ({rules}) => {
    return <style type="text/css"
                  dangerouslySetInnerHTML={{ __html: rules }}/>
};


