import * as React from "react";
import {BlockQuote, Appear, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export const Preentation = ({jobs, app}) => {
    return <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                {app.title}
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                {app.subtitle}
            </Text>
        </Slide>


        <Slide transition={["slide"]}
               bgImage={"https://goo.gl/8E5K0K"}
               bgDarken={0.70}>
            {       Object.keys(jobs).map((job, index) => {
                return <Appear
                    key={Math.random()}
                    fid={index}>
                    <Heading size={1} caps fit textColor="primary">
                        {jobs[job].company}
                    </Heading>
                </Appear>
            })}


        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
                <Quote>{app.quote}</Quote>
                <Cite>{app.author}</Cite>
            </BlockQuote>
        </Slide>
    </Deck>
};


export const Slide2 = ({users}) => {
    return <Slide transition={["fade"]} bgColor="tertiary">
        {users.map((i) => {
            return <div key={Math.random()}/>
        })}
    </Slide>
};

export const Slide3 = ({posts}) => {
    return <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
        <div style={{}}>
            {posts.map((i) => (<div key={Math.random()}/>))}
        </div>
    </Slide>
};
