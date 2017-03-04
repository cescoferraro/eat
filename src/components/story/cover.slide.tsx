import * as React from "react";
import {Heading, Text} from "spectacle";

interface Props {
    app: App
}

export class CoverSlide extends React.Component<Props,any> {

    render() {
        const {app}= this.props;
        return <div>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                {app.title}
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                {app.subtitle}
            </Text>
        </div>
    }
}
