import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeContactForm from "./homeContactForm";

class HomeContactUs extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <div  id={"homeContactUs"}>
                <Container fluid className={"contactUsMainForm"}>
                    <Row>
                        <Col lg={6} md={6} ></Col>
                        <Col lg={6} md={6} xs={12}><HomeContactForm/></Col>

                    </Row> <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
                </Container>
            </div>

        )
    }
}
export default HomeContactUs