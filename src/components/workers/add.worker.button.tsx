import * as React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import {guid} from "../../shared";
import {WorkersFactory} from "./workers.factory";


export const AddWorkerButton = ({
    css,
    SHOW_WORKER_MODAL,
    SET_EDITING_WORKER,
    SET_WORKER_FORM_MODE
}) => (
    <div className={css.addButton}>
        <FloatingActionButton onClick={()=>{
            SET_WORKER_FORM_MODE("add");

            SET_EDITING_WORKER(guid(),new WorkersFactory());
            {/*SET_EDITING_JOB(guid(),new JobFactory());*/}
            SHOW_WORKER_MODAL(true);
        }}>
            <ContentAdd />
        </FloatingActionButton>
    </div>
);


