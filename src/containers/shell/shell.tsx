import * as React from "react";
import MDAppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Pizza from "material-ui/svg-icons/maps/local-pizza";
import ArrowBack from "material-ui/svg-icons/action/exit-to-app";
import {compose} from "recompose";
import {StyleConnect} from "../../components/StyleConnect";
import {connect} from "react-redux";
import {APP_ACTIONS} from "../../store/actions";

const css = require("./shell.pcss");

export const AppBar = compose(
    StyleConnect(css),
    connect(state => (
        {
            firebase: state.firebase,
            app: state.app
        }
    ), APP_ACTIONS)
)(({location, LOGOUT, firebase}) => {
    return location.pathname === "/" ? null :
        <MDAppBar
            className={css.shell}
            title={<span >Eat Admin Panel</span>}
            iconElementLeft={<IconButton><Pizza/></IconButton>}
            iconElementRight={<LogoutButton relay={{firebase,LOGOUT}}/>}
        />
});


const LogoutButton = ({relay}) => {
    return relay.firebase.get("auth") != null ?
        <IconButton onClick={relay.LOGOUT}>
            <ArrowBack />
        </IconButton>: null;
};
