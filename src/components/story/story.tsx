import * as React from "react";
import {BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text} from "spectacle";
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from "react-redux-firebase";
import {Preentation} from "./teplate";
import {defaultAPP} from "../../shared/default.app";


export class Story extends React.Component<any,any> {
    render() {
        return !isLoaded(this.props.app)
            ? <Preentation app={defaultAPP}/>
            : isEmpty(this.props.app)
                ? <div>The database is empty</div>
                : <Preentation app={this.props.app}/>
    }
}
