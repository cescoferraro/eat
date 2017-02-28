import * as React from "react";
import {BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text} from "spectacle";
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from "react-redux-firebase";
import {Preentation} from "./teplate";
import {defaultAPP, defaultJob} from "../../shared/default.app";


export class Story extends React.Component<any,any> {
    render() {
        console.log(this.props.app);
        console.log(this.props.jobs);
        return !isLoaded(this.props.app) || !isLoaded(this.props.jobs)
            ? <Preentation jobs={{"og":defaultJob}} app={defaultAPP}/>
            : isEmpty(this.props.app) || isEmpty(this.props.jobs)
                ? <div>The database is empty</div>
                : <Preentation jobs={this.props.jobs} app={this.props.app}/>
    }
}
