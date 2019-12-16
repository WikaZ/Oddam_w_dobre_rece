import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeContactForm from './homeContactForm'


class HomeFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id={"homeFooter"}>
                <p>Copiright by Coders Lab</p>
            </div>

        )
    }
}

export default HomeFooter