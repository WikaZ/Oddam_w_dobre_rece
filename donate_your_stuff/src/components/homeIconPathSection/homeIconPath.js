import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../../assets/Decoration.svg";
import HomeIconPathHeader from "./homeIconPathHeader";
import HomeIconPathSteps from "./homeIconPathSteps";
import HomeIconPathFooter from "./homeIconPathFooter";

class HomeIconPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
            <Container id={"homeIconPath"} >
                <Row>
                    <Col lg={3} md={3}></Col>
                    <Col lg={6} md={6} xs={12}>
                        <HomeIconPathHeader />
                    </Col>
                    <Col lg={3} md={3}></Col>

                </Row>
            </Container>
                <div className={'stepMainContent'}>
                    < HomeIconPathSteps/>
                </div>
            <Container>
                <Row>
                    <Col lg={4} md={4}></Col>
                    <Col lg={4} md={4} xs={12}>
                        < HomeIconPathFooter/>
                    </Col>
                    <Col lg={4} md={4}></Col>
                </Row>
            </Container>
        </>

        )
    }
}

export default HomeIconPath