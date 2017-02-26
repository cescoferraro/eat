import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {PeopleComponent} from "./people.component";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import * as Chance from "chance";
import {peopleFake} from "./people.list.fake";
let css = require('../css/dashboard.pcss');

let chance = new Chance();
class PeopleListComponent extends React.Component<any, any> {
    firebase;
    ref;
    state = {
        users: [],
        template: {name: "julio", avatar: "https://goo.gl/UO3J6T", job: "hacker", email: "hello@gmail.com"}
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

        this.ref = this.firebase.syncState(`users`, {
            context: this,
            state: 'users',
            asArray: true
        });
    }

    componentWillUnmount() {
        this.firebase.removeBinding(this.ref);
    }


    handleNameChange(e) {
        this.setState({template: {...this.state.template, name: e.target.value}})
    }

    handleEmailChange(e) {
        this.setState({template: {...this.state.template, email: e.target.value}})
    }

    handleJobChange(e) {
        this.setState({template: {...this.state.template, job: e.target.value}})
    }

    handleAvatarChange(e) {
        this.setState({template: {...this.state.template, avatar: e.target.value}})
    }


    createPost(event) {
        event.preventDefault();
        let people: People = {
            name: event.target.elements.name.value,
            job: event.target.elements.job.value,
            email: event.target.elements.email.value,
            avatar: event.target.elements.avatar.value
        };

        this.setState({
            users: this.state.users.concat([people]) //updates Firebase and the local state
        });
        this.state.template = {
            name: chance.word(),
            job: chance.word(),
            email: chance.email(),
            avatar: "https://goo.gl/UO3J6T",
        };
        this.forceUpdate();
        event.target.elements.name.value = chance.word();
        event.target.elements.job.value = chance.word();
        event.target.elements.email.value = chance.email();
        event.target.elements.avatar.value = "https://goo.gl/UO3J6T";

    }

    format() {
        this.setState({
            users: peopleFake //updates Firebase and the local state
        });


    }

    render() {
        console.log(this.state);
        return <div className={css.container}>


            <form className={css.postForm} onSubmit={this.createPost.bind(this)}>

                <PeopleComponent people={this.state.template}></PeopleComponent>
                <TextField
                    fullWidth={true}
                    placeholder={"POST TITLE"}
                    type="text"
                    id="name"
                    floatingLabelText="Name"
                    defaultValue={this.state.template.name}
                    onChange={this.handleNameChange.bind(this)}
                    name="name"
                />
                <TextField
                    fullWidth={true}
                    placeholder={"email"}
                    type="email"
                    id="email"
                    floatingLabelText="Floating Label Text"
                    defaultValue={this.state.template.email}
                    onChange={this.handleEmailChange.bind(this)}
                    name="email"
                />

                <TextField
                    fullWidth={true}
                    placeholder={"job"}
                    type="text"
                    id="job"
                    floatingLabelText="Job Title"
                    defaultValue={this.state.template.job}
                    onChange={this.handleJobChange.bind(this)}
                    name="job"
                />

                <TextField
                    fullWidth={true}
                    placeholder={"avatar"}
                    type="text"
                    id="avatar"
                    floatingLabelText="Avatar Url"
                    defaultValue={this.state.template.avatar}
                    onChange={this.handleAvatarChange.bind(this)}
                    name="avatar"
                />

                <RaisedButton
                    secondary={true}
                    type="submit">
                    Send Post
                </RaisedButton>
            </form>

            <RaisedButton
                primary={true}
                onClick={this.format.bind(this)}
                fullWidth={true}
                type="submit">
                Format Data
            </RaisedButton>

            {/*//  Show All Post!*/}
            {/*{this.state.users.map((people: People) => (*/}
            {/*<PeopleComponent people={people} key={Math.random()}/>))}*/}
        </div >
    }

}


export const PeopleList = withStyles(css)(PeopleListComponent);
