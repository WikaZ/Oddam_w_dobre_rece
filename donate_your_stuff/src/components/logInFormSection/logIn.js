import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import img from "../../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUp from "../signUpFormSection/signUp";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Container>
                    <Row className={"logInHeader"}>
                        <Col>
                            <div className={"formHeader alignContent"}>
                                <h1>Zaloguj się</h1>

                                <img src={img} alt="dekoracja"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4}></Col>
                        <Col lg={4} md={4} xs={12}>
                            <div className={"alignLoginForm"}>

                                <label>Email</label>
                                <input type="email"/>


                                <label id={"logInPassLabel"}>Hasło</label>
                                <input type="password"/>

                            </div>
                        </Col>
                        <Col lg={4} md={4}></Col>
                    </Row>
                    <Row className={'logInFooter'}>
                        <Col lg={3} md={3} xs={3}></Col>
                        <Col lg={6} md={6} xs={6}>
                            <div className={"inputFormBtn"}>
                                <button className={"logInBtn"}><Link to="/rejestracja">Załóż konto</Link></button>
                                <input type="submit" value={"Zaloguj się"} className={"logInBtn"}/>
                            </div>
                        </Col>
                        <Col lg={3} md={3} xs={3}></Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default LogIn