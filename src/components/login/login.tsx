import * as React from "react";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Pizza from "material-ui/svg-icons/maps/local-pizza";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
let css = require('./login.pcss');


class Login extends React.Component<any, any> {
    context: any;

    static contextTypes = {router: React.PropTypes.object};

    constructor(props) {
        super(props);
    }

    login(event) {
        event.preventDefault();
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                this.context.router.transitionTo("/dashboard");
            })
            .catch(function (error) {
                // Handle Errors here.
            });
    }

    home() {
        this.context.router.transitionTo("/");
    }

    render() {
        return (<div className={css.page}>
                <AppBar
                    title={<span >Eat Admin Panel</span>}
                    onTitleTouchTap={handleTouchTap}
                    iconElementLeft={<IconButton><Pizza /></IconButton>}
                    iconElementRight={   <FlatButton label="HOME"
                        onClick={this.home.bind(this)}/>}
                />
                <div className={css.container}>
                    <Card>
                        <form onSubmit={this.login.bind(this)} className={css.form}>
                            <TextField
                                defaultValue={"cesco@gmail.com"}
                                type="email"
                                id="email"
                                name="email"
                                fullWidth={true}
                                hintText="Hint Text"
                            /><br />

                            <TextField
                                fullWidth={true}
                                defaultValue={"cesco12"}
                                type="password"
                                id="password"
                                name="password"
                                hintText="Hint Text"
                            /><br />
                            <RaisedButton
                                type="submit" value="Submit"
                                label="Login Admin" fullWidth={true}/>
                        </form>
                    </Card>
                    <Card>

                    </Card>
                </div>
            </div>
        );
    }
}

export default withStyles(css)(Login);


function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}
