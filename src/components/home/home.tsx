import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import {PostComponent} from "../dashboard/post/post.component";
import * as React from "react";
import AutoScale from "react-auto-scale";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {SectionsContainer, Section, Header, Footer} from "react-fullpage";
import {Parallax, Background} from "react-parallax";
import Utils from "../../shared/utils";
import {PeopleComponent} from "../dashboard/people/people.component";
// Import Spectacle Core tags
import {BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text} from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";
declare let global, firebase, require, window: any;
let css = require('./css/home.pcss');


class HomeComponent extends React.Component<any, any> {
    firebaseRef;
    context: any;
    base;
    appRef;
    postsRef;
    usersRef;
    static contextTypes = {router: React.PropTypes.object};
    state = {
        posts: [],
        users: [],
        app: {
            title: "WEAREEAT",
            subtitle: "WE ROCK YOUR WORLD!",
        }
    };

    componentDidMount() {
        let Rebase = require('re-base');
        this.base = Rebase.createClass(Utils.FIREBASE_CONFIG, 'myApp');
        this.postsRef = this.base.syncState(`posts`, {
            context: this,
            state: 'posts',
            asArray: true
        });
        this.usersRef = this.base.syncState(`users`, {
            context: this,
            state: 'users',
            asArray: true
        });
        this.appRef = this.base.syncState(`app`, {
            context: this,
            state: 'app'
        });
    }

    componentWillUnmount() {
        this.base.removeBinding(this.postsRef);
        this.base.removeBinding(this.usersRef);
        this.base.removeBinding(this.appRef);
    }


    login() {
        this.context.router.transitionTo("/admin");
    }

    render() {
        const theme = createTheme({
            primary: "white",
            secondary: "#1F2022",
            tertiary: "#03A9FC",
            quartenary: "#CECECE"
        }, {
            primary: "Montserrat",
            secondary: "Helvetica"
        });

        console.log(this.state);
        return (<div >
            <FloatingActionButton
                onClick={this.login.bind(this)}
                className={css.loginButton}>
                <ContentAdd />
            </FloatingActionButton>
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        {this.state.app.title}
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        {this.state.app.subtitle}
                    </Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">


                    {this.state.users.map((i, item) => {
                        return <PeopleComponent key={Math.random()} people={i}/>
                    })}

                </Slide>
                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">

                    <div style={{}}>

                        {this.state.posts.map((i, item) => {
                            return <AutoScale key={Math.random()} maxWidth={250} maxHeight={250}>
                                <PostComponent post={i}/>
                            </AutoScale>
                        })}
                    </div>


                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        </div>)
    }
}

export default withStyles(css)(HomeComponent);




