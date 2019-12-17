import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeContactForm from "./homeContactForm";
import instagram from "../../assets/Instagram.svg";
import facebook from "../../assets/Facebook.svg";

class HomeContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id={"homeContactUs"}>
                <Container fluid className={"contactUsMainForm"}>
                    <Row>
                        <Col lg={7} md={7}></Col>
                        <Col lg={5} md={5} xs={12}><HomeContactForm/></Col>


                    </Row>
                    <div className={"footer"}>
                    <Row>

                            <Col lg={4} md={4} xs={4}></Col>
                            <Col lg={4} md={4} xs={4}>
                                <div id={"homeFooter"}>
                                    <p>Copiright by Coders Lab</p>
                                </div>
                            </Col>
                            <Col lg={4} md={4} xs={4}>
                                <div className={"social"}>
                                    <img src={facebook} alt="facebook_icon"/>
                                    <img src={instagram} alt="instagram_icon"/>

                                </div>
                            </Col>



                    </Row>
                    </div>
                </Container>
            </div>

        )
    }
}

export default HomeContactUs