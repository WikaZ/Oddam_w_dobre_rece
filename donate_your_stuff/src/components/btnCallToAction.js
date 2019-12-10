import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {HashRouter, Link} from "react-router-dom";

class BtnCallToAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <HashRouter>
                <>
                    <div className={"btnCallToAction"}>
                        <Link to="/logowanie" className={"callToAction"}><h1>ODDAJ <span>RZECZY</span></h1></Link>
                    </div>


                </>
            </HashRouter>
        )
    }
}

export default BtnCallToAction