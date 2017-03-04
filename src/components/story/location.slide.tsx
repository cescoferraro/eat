import * as React from "react";
import * as _ from "lodash";
import {Appear, Heading, Text} from "spectacle";

interface Props {
    workers: {[id: string]: AppWorker}
}

export class LocationSlide extends React.Component<Props,any> {

    render() {
        const {workers}= this.props;
        return <div>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                We live at
            </Text>
            {   _(workers)
                .keys()
                .shuffle()
                .filter((worker, index) => (index < 4))
                .map((ID, index) => (<Appear
                    key={Math.random()}
                    fid={index}>
                    <Heading size={1} caps fit textColor="primary">
                        {workers[ID].country}
                    </Heading>
                </Appear>)).value()
            }
        </div>
    }
}
