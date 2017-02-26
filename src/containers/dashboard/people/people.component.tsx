import {createAsyncComponent} from "react-async-component";
import * as React from "react";
import {CardHeader} from "material-ui/Card";
let css = require('../css/dashboard.pcss');
declare const firebase: any;



export const PeopleComponent = ({people}) => {

    return  <CardHeader
        title={people.name}
        subtitle={people.job}
        avatar={people.avatar}
        actAsExpander={true}
        showExpandableButton={true}
    />
};


