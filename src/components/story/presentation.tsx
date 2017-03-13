import * as React from "react";
import * as D3ACT from "myd3";
import * as _ from "lodash";
import {compose} from "recompose";
import SizeMe from "react-sizeme";
import {BlockQuote, Appear, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text} from "spectacle";
import {JobBarChart} from "./doughnout";
import {StyleConnect} from "../StyleConnect";
import {PreentationTheme} from "./presentation.style";
import {QuoteSlide} from "./quote.slide";
import {CoverSlide} from "./cover.slide";
const css = require("./presentation.pcss");

export const Preentation = compose(
    SizeMe(),
    StyleConnect(css))
(({
        jobs,
        app,
        FirebaseWorkers,
        size
    }:{
        jobs: {[id: string]: Job},
        app: App,
        FirebaseWorkers: {[id: string]: AppWorker},
        size: {height: number, width: number}

    }) => (
        <Deck transition={["zoom"]} transitionDuration={500}
              theme={PreentationTheme}>
            <Slide transition={["zoom"]} bgColor="primary">
                <CoverSlide app={app}/>
            </Slide>

            <Slide transition={["slide"]}
                   bgImage={"https://goo.gl/PL2DkY"}
                   bgDarken={0.70}>
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                    We live at
                </Text>
                {   _(FirebaseWorkers)
                    .keys()
                    .shuffle()
                    .filter((worker, index) => (index < 4))
                    .map((ID, index) => (<Appear
                        key={Math.random()}
                        fid={index}>
                        <Heading size={1} caps fit textColor="primary">
                            {FirebaseWorkers[ID].country}
                        </Heading>
                    </Appear>)).value()
                }
            </Slide>


            <Slide transition={["fade"]} bgColor="white" textColor="primary">
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                    Literally everywhere
                </Text>
                <D3ACT
                    type={"bubble"}
                    diameter={size.width*0.57}
                    showTooltips={true}
                    data={{children: _(FirebaseWorkers)
                                    .keys()
                                    .map(ID => (FirebaseWorkers[ID]))
                                    .countBy("country")
                                    .map((qty, country) =>
                                    ({name: country, value: qty})).value()}}/>
            </Slide>
            <Slide transition={["fade"]} bgColor="white" textColor="primary">
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                    Doing all sorts of crazy stuff
                </Text>

                <JobBarChart
                    size={size}
                    workers={FirebaseWorkers}
                />
            </Slide>
            <Slide transition={["slide"]}
                   bgImage={"https://goo.gl/8E5K0K"}
                   bgDarken={0.70}>
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                    We work for
                </Text>
                { _(jobs).keys()
                    .filter((job, index) => (index < 6))
                    .map((job: string, index) => {
                        console.log(jobs[job].company);
                        return <Appear
                            key={Math.random()}
                            fid={index}>
                            <Heading size={1} caps fit textColor="primary">
                                {jobs[job].company}
                            </Heading>
                        </Appear>
                    }).value()}
            </Slide>
            <Slide transition={["slide"]}
                   bgImage={"https://goo.gl/8E5K0K"}
                   bgDarken={0.70}>
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                    We did stuff like
                </Text>
                {   _(jobs)
                    .shuffle()
                    .filter((job, index) => (index < 6))
                    .map((job: Job, index) => (
                        <Appear key={Math.random()} fid={index}>
                            <Heading size={1} caps fit textColor="primary">
                                <a style={{ color: "inherit"}} href={job.url}>
                                    {job.title}
                                </a>
                            </Heading>
                        </Appear>)).value()
                }

            </Slide>
            <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                <QuoteSlide app={app}/>
            </Slide>
        </Deck>
    )
);

