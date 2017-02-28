import * as React from "react";
import {List} from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import {JobItem} from "./jobs.item";

export const JobList = ({
    jobs,
    SET_FORM_MODE,
    DELETE_JOB,
    SET_EDITING_JOB,
    SHOW_JOBS_MODAL
}) => (
    <List>
        <Subheader>Jobs</Subheader>
        {Object.keys(jobs).map((ID) => {
            return <JobItem
                DELETE_JOB={DELETE_JOB}
                SET_FORM_MODE={SET_FORM_MODE}
                SET_EDITING_JOB={SET_EDITING_JOB}
                SHOW_JOBS_MODAL={SHOW_JOBS_MODAL}
                key={Math.random()}
                ID={ID}
                job={jobs[ID]}/>
        })}
        <Divider inset={true}/>
    </List>
);

