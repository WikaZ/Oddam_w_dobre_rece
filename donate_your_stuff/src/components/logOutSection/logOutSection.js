import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

export default class LogOutSection extends React.Component {
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
                            <div className={"formHeader alignLogOutContent"}>
                                <h1>Wylogowanie nastąpiło<span id={"newLine"}>pomyślnie!</span></h1>

                                <img src={img} alt="dekoracja"/>
                                <div className={"homeLinkBtn"}>
                                    <button className={"logInBtn"}><Link to="/">Strona główna</Link></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}