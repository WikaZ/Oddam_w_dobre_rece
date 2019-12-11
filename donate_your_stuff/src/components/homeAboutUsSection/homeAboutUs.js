import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../../assets/Decoration.svg";

class HomeAboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id={"homeAboutUs"} style={{height: "350px", backgroundColor: "blue"}}>
                <Container>
                    <Row>
                        <Col lg={6} md={6} xs={12}>
                            <div className={"homeAboutUsContent"}>
                                <h1 className={"mainHeading"}>O nas</h1>
                                <img src={img} alt={"decoration"}/>
                                <p>
                                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                                </p>
                            </div>

                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className={"homeAboutUsImage"}>
                            </div>

                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}

export default HomeAboutUs