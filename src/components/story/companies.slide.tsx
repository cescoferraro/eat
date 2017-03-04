import * as React from "react";
import {Appear, Heading, Text} from "spectacle";

interface Props {
    jobs: {[id: string]: Job}
}

export class CompaniesSlide extends React.Component<Props,any> {

    render() {
        const {jobs}= this.props;
        return <div>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                We work for
            </Text>
            {       Object.keys(jobs).map((job, index) => {
                return <Appear
                    key={Math.random()}
                    fid={index}>
                    <Heading size={1} caps fit textColor="primary">
                        {jobs[job].company}
                    </Heading>
                </Appear>
            })}
        </div>
    }
}
