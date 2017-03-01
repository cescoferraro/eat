import * as React from "react";
import {List, ListItem} from "material-ui/List";
import {grey400, darkBlack, lightBlack} from "material-ui/styles/colors";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from "react-redux-firebase";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Avatar from "material-ui/Avatar";
import * as HammerComponent from "react-hammerjs";


export const WorkerItem = ({
    worker, SHOW_WORKER_MODAL,
    SET_WORKER_FORM_MODE,
    DELETE_WORKER,
    SET_EDITING_WORKER, ID
}:
    {
        ID: string,
        SHOW_WORKER_MODAL,
        DELETE_WORKER,
        SET_WORKER_FORM_MODE,
        SET_EDITING_WORKER, worker: AppWorker
    }) => {

    let openModal = () => {
        SET_WORKER_FORM_MODE("update");
        SET_EDITING_WORKER(ID, worker);
        SHOW_WORKER_MODAL(true);
    };
    const GODelete = () => {
        console.info("DELETEING " + ID);
        DELETE_WORKER(ID);
    };

    return (
        <HammerComponent onPress={openModal}>
            <ListItem key={Math.random()}
                      leftAvatar={<Avatar src={worker.avatar} />}
                      primaryText={worker.name}

                      rightIconButton={rightIconMenu(openModal,GODelete)}
                      secondaryText={<Subtitle  worker={worker}/>}
                      secondaryTextLines={2}/>
        </HammerComponent>
    )
};

let Subtitle = ({worker}:{worker: AppWorker}) => {
    return (
        <p>
            <span style={{color: darkBlack}}>
                {worker.job}
            </span>
            <br/>
            <span style={{color: darkBlack}}>
                {worker.country}
            </span>
            <br/>
        </p>
    )
};


const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400}/>
    </IconButton>
);

const rightIconMenu = (openModal, GODelete) => (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onClick={openModal}>
            Edit
        </MenuItem>
        <MenuItem onClick={GODelete}>
            Remove
        </MenuItem>
    </IconMenu>
);
