import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../assets/Decoration.svg";

class HomeIconPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id={"homeIconPath"} style={{height: "350px", backgroundColor: "green"}}>
                <Container fluid className={"containerStyle"}>
                    <Row>
                        <Col>
                            <div className={"homeIconPathHeader"}>
                                <h1>Wystarczą 4 proste kroki</h1>
                                <img src={img} alt="decoration" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2} md={2} xs={4}><h1></h1>

                        </Col>
                        <Col lg={2} md={2} xs={4}><h1>Title</h1>
                            <p>Lorem ipsum dolor sit.</p>
                        </Col>
                        <Col lg={2} md={2} xs={4}><h1>Title</h1>
                            <p>Lorem ipsum dolor sit.</p>
                        </Col>
                        <Col lg={2} md={2} xs={4}><h1>Title</h1>
                            <p>Lorem ipsum dolor sit.</p>
                        </Col>
                        <Col lg={2} md={2} xs={4}><h1>Title</h1>
                            <p>Lorem ipsum dolor sit.</p>
                        </Col>
                        <Col lg={2} md={2} xs={4}><h1></h1>

                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default HomeIconPath