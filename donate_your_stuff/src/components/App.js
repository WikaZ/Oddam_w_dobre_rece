import React from 'react';
import Home from './home';
import {HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LogIn from "./logInFormSection/logIn";
import SignUp from "./signUpFormSection/signUp";
import FundationsSection from "./homeWhoDoWeHelp/fundationSection/fundationsSection";
import OrganisationsSection from "./homeWhoDoWeHelp/organisationsSection/organisationsSection";
import LocalDonationCenterSection from "./homeWhoDoWeHelp/localDonationCenterSection/localDonationCenterSection";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <HashRouter>
                <Switch>
                    <Route path="/logowanie" component={LogIn}/>
                    <Route path="/rejestracja" component={SignUp}/>
                    <Route exact path={"/"} component={Home}/>


                </Switch>
            </HashRouter>
        )
    }
}

export default App