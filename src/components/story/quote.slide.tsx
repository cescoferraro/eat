import * as React from "react";
import {BlockQuote, Quote, Cite} from "spectacle";

interface Props {
    app: App
}

export class QuoteSlide extends React.Component<Props,any> {

    render() {
        const {app}= this.props;
        return <BlockQuote>
            <Quote>{app.quote}</Quote>
            <Cite>{app.author}</Cite>
        </BlockQuote>
    }
}
