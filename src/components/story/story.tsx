import * as React from "react";
import {firebaseConnect, isLoaded, isEmpty} from "react-redux-firebase";
import {Preentation} from "./presentation";


export class Story extends React.Component<any,any> {
    render() {
        const {app, jobs, workers} = this.props;
        return !isLoaded(app) || !isLoaded(jobs) || !isLoaded(workers)
            ? <h2>FETCHING DATABASE...</h2>
            : isEmpty(this.props.app) || isEmpty(this.props.jobs)
                ? <h2>(ERROR...) - FIREBASE DATABASE IS EMPTY </h2>
                : <Preentation
                    FirebaseWorkers={workers}
                    jobs={this.props.jobs} app={this.props.app}/>
    }
}
