import React from 'react';
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BtnCallToAction from "../homeIconPathSection/btnCallToAction";
import BtnSignUp from "../homeHeaderSection/btnSignUp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class CallToAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <HashRouter>
                <>
                   <div className={"btnWrapper"}>

                                <Link to="/logowanie" className={"callToAction"}>
                                    {/*<h1>ODDAJ <span >RZECZY</span></h1>*/}
                                    <BtnCallToAction>
                                        <span>ODDAJ <span>RZECZY</span></span>
                                    </BtnCallToAction>
                                </Link>

                                <Link to="/logowanie" className={"callToAction"}>
                                    <BtnSignUp/>
                                </Link>


                    </div>
                </>
            </HashRouter>
        )
    }
}

export default CallToAction