import {createAsyncComponent} from "react-async-component";
import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {postData} from "./post.list.fake";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import AutoScale from "react-auto-scale";
import * as Chance from "chance";
import {PostComponent} from "./post.component";
import {Post} from "./post.d";
let css = require('../css/dashboard.pcss');
declare const firebase: any;

let chance = new Chance();

class PostListComponent extends React.Component<any, any> {
    firebase;
    ref;

    state: any = {
        items: [],
        template: {
            title: "Nice title",
            subtitle: "cool explanation",
            content: "all content"
        }
    };

    createPost(event) {
        event.preventDefault();
        let post: Post = {
            content: event.target.elements.content.value,
            subtitle: event.target.elements.subtitle.value,
            title: event.target.elements.title.value
        };

        this.setState({
            items: this.state.items.concat([post]) //updates Firebase and the local state
        });
        event.target.elements.content.value = chance.word();
        event.target.elements.content.subtitle = chance.word();
        event.target.elements.content.subtitle = chance.paragraph();

    }


    componentDidMount() {

        let Rebase = require('re-base');
        this.firebase = Rebase.createClass({
            apiKey: "AIzaSyBxg-ZN4_K2t1pUXWeXL9hwzl42LO94McY",
            authDomain: "weareeat-9fd66.firebaseapp.com",
            databaseURL: "https://weareeat-9fd66.firebaseio.com",
            storageBucket: "weareeat-9fd66.appspot.com",
            messagingSenderId: "677035655043"
        }, 'eatHome');

        this.ref = this.firebase.syncState(`posts`, {
            context: this,
            state: 'items',
            asArray: true
        });
    }

    componentWillUnmount() {
        this.firebase.removeBinding(this.ref);
    }

    format() {
        this.setState({
            items: postData //updates Firebase and the local state
        });


    }

    handleTitleChange(e) {
        this.setState({template: {...this.state.template, title: e.target.value}})
    }

    handleSubtitleChange(e) {
        this.setState({template: {...this.state.template, subtitle: e.target.value}})
    }

    handleContentChange(e) {
        this.setState({template: {...this.state.template, content: e.target.value}})
    }


    render() {
        return <div id="postlist">

            <AutoScale
                wrapperClass={css.postTemplate}
                containerClass={css.inner}
                maxHeight={250}>
                <PostComponent scale={"0.5"} post={this.state.template}/>
            </AutoScale>


            <form className={css.postForm} onSubmit={this.createPost.bind(this)}>
                <TextField
                    fullWidth={true}
                    placeholder={"POST TITLE"}
                    type="text"
                    id="title"
                    defaultValue={this.state.template.title}
                    onChange={this.handleTitleChange.bind(this)}
                    name="title"
                />
                <TextField
                    fullWidth={true}
                    placeholder={"POST SUBTITLE"}
                    type="text"

                    id="subtitle"
                    defaultValue={this.state.template.subtitle}
                    onChange={this.handleSubtitleChange.bind(this)}
                    name="subtitle"
                />

                <TextField
                    fullWidth={true}
                    placeholder={"CONTENT"}
                    type="text"
                    id="content"

                    defaultValue={this.state.template.content}
                    onChange={this.handleContentChange.bind(this)}
                    name="content"
                />
                <RaisedButton type="submit">
                    Send Post
                </RaisedButton>
            </form>

            <RaisedButton fullWidth={true}
                          onClick={this.format.bind(this)}>
                Format
            </RaisedButton>

            {/*//  Show All Post!*/}
            {/*{this.state.items.map((post: Post) => (*/}
            {/*<PostComponent post={post} key={Math.random()}/>))}*/}
        </div>
    }

}


export const PostList = withStyles(css)(PostListComponent);
