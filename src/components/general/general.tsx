import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
let css = require('./general.pcss');

import TextField from "material-ui/TextField";

export type App ={
    subtitle: string;
    title: string;
    url: string;
    quote: string;
    author: string;
}

let defaultApp: App = {
    subtitle: "sdkjfnsdf",
    title: "we are",
    url: "http://weareeat.com",
    quote: "quote",
    author: "author",
};


class GeneralTabComponent extends React.Component<any, any> {
    firebase;
    ref;
    state = {
        app: defaultApp
    };

    componentDidMount() {

        let Rebase = require('re-base');
        this.firebase = Rebase.createClass({
            apiKey: "AIzaSyBxg-ZN4_K2t1pUXWeXL9hwzl42LO94McY",
            authDomain: "weareeat-9fd66.firebaseapp.com",
            databaseURL: "https://weareeat-9fd66.firebaseio.com",
            storageBucket: "weareeat-9fd66.appspot.com",
            messagingSenderId: "677035655043"
        }, 'eatPeatHomeeople');

        this.ref = this.firebase.syncState(`app`, {
            context: this,
            state: 'app'
        });
    }

    componentWillUnmount() {
        this.firebase.removeBinding(this.ref);
    }

    shit() {
    }

    handleTitleChange(e) {
        this.setState({app: {...this.state.app, title: e.target.value}})
    }

    handleSubTitleChange(e) {
        this.setState({app: {...this.state.app, subtitle: e.target.value}})
    }

    handleUrlChange(e) {
        this.setState({app: {...this.state.app, url: e.target.value}})
    }

    handleQuoteChange(e) {
        this.setState({app: {...this.state.app, quote: e.target.value}})
    }

    handleAuthorChange(e) {
        this.setState({app: {...this.state.app, author: e.target.value}})
    }

    render() {
        console.log(this.state);


        return <div>

            <form onSubmit={this.shit.bind(this)}>


                <TextField
                    fullWidth={true}
                    placeholder={"title"}
                    type="text"
                    id="title"
                    value={this.state.app.title}
                    onChange={this.handleTitleChange.bind(this)}
                    name="title"
                />
                <TextField
                    fullWidth={true}
                    placeholder={"subtitle"}
                    type="text"
                    id="subtitle"
                    value={this.state.app.subtitle}
                    onChange={this.handleSubTitleChange.bind(this)}
                    name="subtitle"
                />

                <TextField
                    fullWidth={true}
                    placeholder={"url"}
                    type="text"
                    id="url"
                    value={this.state.app.url}
                    onChange={this.handleUrlChange.bind(this)}
                    name="url"
                />
                <TextField
                    fullWidth={true}
                    placeholder={"quote"}
                    type="text"
                    id="quote"
                    value={this.state.app.quote}
                    onChange={this.handleQuoteChange.bind(this)}
                    name="quote"
                />
                <TextField
                    fullWidth={true}
                    placeholder={"author"}
                    type="text"
                    id="author"
                    value={this.state.app.author}
                    onChange={this.handleAuthorChange.bind(this)}
                    name="author"
                />
            </form>
            <h2>{this.state.app.title}</h2>
            <h2>{this.state.app.subtitle}</h2>
            <h2>{this.state.app.url}</h2>
            <h2>{this.state.app.quote}</h2>
            <h2>{this.state.app.author}</h2>


        </div >
    }

}


export const GeneralTab = withStyles(css)(GeneralTabComponent);
