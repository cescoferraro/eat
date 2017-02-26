import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import * as React from "react";

export const LoginButton = ({push, css}) => {
    const login = () => {
        push("/admin")
    };
    return <FloatingActionButton
        onClick={login}
        className={css}>
        <ContentAdd />
    </FloatingActionButton>
};
