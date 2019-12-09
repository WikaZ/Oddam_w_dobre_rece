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

                <ul className={"headerMenu"}>
                    <li><Link to="/logowanie">Zaloguj</Link></li>
                    <li><Link to="/rejestracja">Załóż konto</Link></li>

                </ul>

            </div>
        )
    }
}

export default MainUpperMenuBar