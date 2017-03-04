import * as React from "react";
import * as Modal from "react-modal";
import {JobForm} from "./jobs.form";


export const JobModal = ({jobsStore, JOB_FORM_SUBMIT, SHOW_JOBS_MODAL}) => {
    const CloseButton = props =><button onClick={()=>{SHOW_JOBS_MODAL(false)}}>
        <h2>close</h2>
    </button>;
    return <Modal
        style={modalstyle}
        isOpen={jobsStore.modal}
        closeTimeoutMS={300}
        contentLabel="Modal">
        <JobForm
            CloseButton={CloseButton}
            JOB_FORM_SUBMIT={JOB_FORM_SUBMIT}
            jobsStore={jobsStore}
        />
    </Modal>
};


const modalstyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
    },
    content: {
        position: 'relative',
        top: '0px',
        right: '0px',
        left: '0px',
        height: "calc(100vh - 64px)",
        marginTop: "64px",
        bottom: '0px',
        zIndex: "22",
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'

    }
};
