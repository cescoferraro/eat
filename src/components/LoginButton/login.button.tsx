import FloatingActionButton from "material-ui/FloatingActionButton";
import LaunchIcon from "material-ui/svg-icons/action/launch";
import * as React from "react";

export const LoginButton = ({push, css}) => {
    const login = () => {
        push("/admin")
    };
    return <FloatingActionButton
        onClick={login}
        className={css}>
        <LaunchIcon/>
    </FloatingActionButton>
};
