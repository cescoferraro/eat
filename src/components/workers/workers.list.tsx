import * as React from "react";
import {List} from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import {WorkerItem} from "./workers.item";

export const WorkersList = ({
    workers,
    SHOW_WORKER_MODAL,
    SET_WORKER_FORM_MODE,
    DELETE_WORKER,
    SET_EDITING_WORKER
}) => (
    <List>
        <Subheader>Workers</Subheader>
        {Object.keys(workers).map((ID) => {
            return <WorkerItem
                SET_WORKER_FORM_MODE={SET_WORKER_FORM_MODE}
                SET_EDITING_WORKER={SET_EDITING_WORKER}
                DELETE_WORKER={DELETE_WORKER}
                SHOW_WORKER_MODAL={SHOW_WORKER_MODAL}
                key={Math.random()}
                ID={ID}
                worker={workers[ID]}/>
        })}
        <Divider inset={true}/>
    </List>
);

