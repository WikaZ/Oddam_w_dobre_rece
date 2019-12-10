import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class HomeThreeCol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id={"homeThreeCol"}>
                <Container fluid className={"containerStyle"}>
                    <Row>
                        <Col lg={4} md={4} sm={12} className={"threeColContent"}>
                            <div className={"threeColNum"}>10</div>
                            <div className={"threeColText"}>
                                <h1>oddanych worków </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} className={"threeColContent"}>
                            <div className={"threeColNum"}>5</div>
                            <div className={"threeColText"}>
                                <h1>wspartych organizacji</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} className={"threeColContent"}>
                            <div className={"threeColNum"}>7</div>
                            <div className={"threeColText"}>
                                <h1>zorganizowanych zbiórek</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default HomeThreeCol