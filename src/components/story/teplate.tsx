import * as React from "react";
import {BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import {PeopleComponent} from "../../containers/dashboard/people/people.component";
import {PostComponent} from "../../containers/dashboard/post/post.component";
const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export const Preentation = ({app}) => {
    return <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                {app.title}
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                {app.subtitle}
            </Text>
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
            return <PeopleComponent key={Math.random()} people={i}/>
        })}
    </Slide>
};

export const Slide3 = ({posts}) => {
    return <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
        <div style={{}}>
            {posts.map((i) => (<PostComponent post={i}/>))}
        </div>
    </Slide>
};
