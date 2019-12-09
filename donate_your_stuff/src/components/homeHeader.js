import React from 'react';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../assets/Decoration.svg";
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainUpperMenuBar from "./mainUpperNav";


class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={"header"}>
                <Container fluid className={"containerStyle"}>
                    <Row>
                        <Col lg={{offset: 9, span: 3}}>
                            <MainUpperMenuBar/>

                        <div>
                            <ul className={"headerMenu"}>
                                <li><a href={"#"}>Start</a></li>
                                <li><a href={"#"}>O co chodzi</a></li>
                                <li><a href={"#"}>O nas</a></li>
                                <li><a href={"#"}>Fundacja i organizacje</a></li>
                                <li><a href={"#"}>Kontakt</a></li>
                            </ul>
                        </div>
                    </Col>


                </Row>
                <Row>
                    <Col lg={{offset: 6, span: 6}} className={"mainHeaderText"}>
                        <h1>Zacznij pomagac!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={img} alt="decoration"/>

                    </Col>
                </Row>
                <Row>
                    <Col lg={{offset: 6, span: 6}} className={"callToAction"}>
                        <button className={"headerBtn"}>ODDAJ RZECZY</button>
                        <button className={"headerBtn"}>ZORGANIZUJ ZBIÓRKĘ</button>
                    </Col>
                </Row>
                <Row>

                </Row>

            </Container>
    </div>
    )
    }
}

export default HomeHeader