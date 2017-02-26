declare const firebase: any;
import {createAsyncComponent} from "react-async-component";
import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {Card, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
let css = require('../css/dashboard.pcss');


let component = ({post, scale}) => {
    let title = <CardTitle title={post.title} subtitle={post.subtitle}/>;
    return (
        <Card style={{width:"100vw"}}>
            <CardHeader
                title="authos"
                subtitle="authos description"
                avatar="https://goo.gl/UO3J6T"
            />
            <CardMedia overlay={title}>
                <img src="https://goo.gl/UO3J6T"/>
            </CardMedia>
            {/*<CardText>{post.content}</CardText>*/}
        </Card>);
};

export const PostComponent = withStyles(css)(component);

