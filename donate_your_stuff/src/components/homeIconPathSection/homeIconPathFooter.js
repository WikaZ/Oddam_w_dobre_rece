import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BtnCallToAction from "./btnCallToAction";
import {Link} from "react-router-dom";

class HomeIconPathFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
<div className={"callToActionWrapper "}>
            <BtnCallToAction>
            <span>ODDAJ <span>RZECZY</span></span>
            </BtnCallToAction>
</div>

        )
    }
}

export default HomeIconPathFooter