import React from 'react';
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class CallToAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <HashRouter>
                <>
                    <ul className={"btnList"}>
                        <li><Link to="/logowanie" className={"callToAction"}><h1>ODDAJ <span >RZECZY</span></h1></Link></li>
                        <li><Link to="/logowanie" className={"callToAction"}><h1>ZORGANIZUJ<span>
                        </span>ZBIÓRKĘ<span/></h1></Link></li>
                    </ul>
                </>
            </HashRouter>
        )
    }
}

export default CallToAction