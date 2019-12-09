import React from 'react';
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LogIn from "./logIn";
import SignUp from "./signUp"


class MainUpperMenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Router>
                    <ul className={"headerMenu"}>
                        <li><Link to="/logowanie">Zaloguj</Link></li>
                        <li><Link to="/konto">Załóż konto</Link></li>

                    </ul>
                    <Route exact path="/logowanie" component={LogIn}/>
                    <Route path="/konto" component={SignUp}/>
                </Router>
            </div>
        )
    }
}

export default MainUpperMenuBar