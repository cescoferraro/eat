import * as React from "react";
import * as hoistStatics from "hoist-non-react-statics";


export const StyleConnect = (...styles) => {
    return (ComposedComponent) => {

        const displayName = ComposedComponent.displayName
            || ComposedComponent.name || 'Component';


        class WithStyles extends React.Component<any,any> {
            displayName = `WithStyles(${displayName})`;
            ComposedComponent = ComposedComponent;
            removeCss;

            static contextTypes = {
                insertCss: React.PropTypes.func,
            };

            componentWillMount() {
                this.removeCss = this.context.insertCss.apply(undefined, styles);
            }

            componentWillUnmount() {
                setTimeout(this.removeCss, 0);
            }

            render() {
                return <ComposedComponent {...this.props} />;
            }
        }


        return hoistStatics(WithStyles, ComposedComponent);
    };
};

