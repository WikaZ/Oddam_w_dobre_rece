import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../../assets/Decoration.svg";
import imgPeople from "../../assets/People.jpg";
import imgSignature from "../../assets/Signature.svg";

class HomeAboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id={"homeAboutUs"}>
                <Container-fluid>
                    <Row>

                        <Col lg={6} md={6} xs={12}>
                            <div className={"homeAboutUsContent"}>
                                <h1 className={"mainHeading"}>O nas</h1>
                                <img src={img} alt={"decoration"}/>
                                <p>
                                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                                </p>
                                <div id={"imgSignature"}>
                                    <img src={imgSignature} alt="Signature"/>
                                </div>
                            </div>

                        </Col>

                        <Col lg={6} md={6} xs={12} className={"homeAboutUsImage"}>
                            {/*<div  >*/}
                            {/*    <img src={imgPeople}  alt="People"/>*/}
                            {/*</div>*/}

                        </Col>
                    </Row>
                </Container-fluid>

            </div>

        )
    }
}

export default HomeAboutUs