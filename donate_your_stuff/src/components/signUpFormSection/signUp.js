import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Row className={"logInHeader"}>
                    <Col>
                        <div className={"formHeader alignContent"}>
                            <h1>Załóż konto</h1>

                            <img src={img} alt="dekoracja"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4}></Col>
                    <Col lg={4} md={4} xs={12}>
                        <div className={"alignLoginForm"}>

                            <label>Email</label>
                            <input type="text"/>
                            <label className={"logInPassLabel"}>Hasło</label>
                            <input type="email"/>
                            <label className={"logInPassLabel"}>Powtórz hasło</label>
                            <input type="password"/>


                        </div>
                    </Col>
                    <Col lg={4} md={4}></Col>
                </Row>
                <Row className={'logInFooter'}>
                    <Col lg={3} md={3} xs={3}></Col>
                    <Col lg={6} md={6} xs={6}>
                        <div className={"inputFormBtn"}>
                            <button className={"logInBtn"}><Link to="/logowanie">Zaloguj się</Link></button>
                            <input type="submit" value={"Zalóż konto"} className={"logInBtn"}/>
                        </div>
                    </Col>
                    <Col lg={3} md={3} xs={3}></Col>
                </Row>
            </Container>

        )
    }
}

export default SignUp

