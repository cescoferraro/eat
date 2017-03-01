import * as React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import {JobFactory} from "./jobs.factory";


export const AddJobButton = ({
    css,
    SET_FORM_MODE,
    SET_EDITING_JOB,
    SHOW_JOBS_MODAL
}) => (
    <div className={css.addButton}>
        <FloatingActionButton onClick={()=>{
            SET_FORM_MODE("add");
            SET_EDITING_JOB(guid(),new JobFactory());
            SHOW_JOBS_MODAL(true);
        }}>
            <ContentAdd />
        </FloatingActionButton>
    </div>
);


function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
