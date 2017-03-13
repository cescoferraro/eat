import * as React from "react";
import {compose} from "recompose";
import {StyleConnect} from "../StyleConnect";
import {connect} from "react-redux";
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from "react-redux-firebase";
import {APP_ACTIONS} from "../../store/actions";
import {AddWorkerButton} from "./add.worker.button";
import {WorkersList} from "./workers.list";
import {WorkersFactory} from "./workers.factory";
import {WorkerModal} from "./workers.modal";
import {SET_EDITING_WORKER} from "./workers.actions";

const css = require("./workers.pcss");


export const Workers = compose(
    StyleConnect(css),
    firebaseConnect([
        '/workers'
        // { path: '/todos' } // object notation
    ]),
    connect(
        ({firebase, workers}) => ({
            // Connect todos prop to firebase todos
            workers: dataToJS(firebase, '/workers'),
            workersStore: workers
        }), APP_ACTIONS
    )
)(({
    workers = [new WorkersFactory()],
    workersStore,
    SET_EDITING_WORKER,
    SET_WORKER_FORM_MODE,
    DELETE_WORKER,
    SHOW_WORKER_MODAL
}) => {
    return <div id="jobs" className={css.container}>
        <WorkersList
            DELETE_WORKER={DELETE_WORKER}
            SET_WORKER_FORM_MODE={SET_WORKER_FORM_MODE}
            SET_EDITING_WORKER={SET_EDITING_WORKER}
            SHOW_WORKER_MODAL={SHOW_WORKER_MODAL}
            workers={workers}/>
        <WorkerModal
            DELETE_WORKER={DELETE_WORKER}
            SHOW_WORKER_MODAL={SHOW_WORKER_MODAL}
            workersStore={workersStore}/>
        <AddWorkerButton
            SET_EDITING_WORKER={SET_EDITING_WORKER}
            SET_WORKER_FORM_MODE={SET_WORKER_FORM_MODE}
            SHOW_WORKER_MODAL={SHOW_WORKER_MODAL}
            css={css}/>
    </div>

});



