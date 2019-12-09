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
                        <li><Link to="/logowanie" className={"callToAction"}><p>ODDAJ </p><p>RZECZY</p></Link></li>
                        <li><Link to="/logowanie" className={"callToAction"}><p>ZORGANIZUj</p>
                            <p>ZBIÓRKĘ</p></Link></li>
                    </ul>
                </>
            </HashRouter>
        )
    }
}

export default CallToAction