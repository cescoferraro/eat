import * as React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Pizza from "material-ui/svg-icons/maps/local-pizza";
import FlatButton from "material-ui/FlatButton";

export const SHell = (props) => {

    return <AppBar
        title={<span >Eat Admin Panel</span>}
        iconElementLeft={<IconButton><Pizza /></IconButton>}
        iconElementRight={   <FlatButton label="HOME"
                        onClick={()=>{
                        }
                        }/>}
    />
};
