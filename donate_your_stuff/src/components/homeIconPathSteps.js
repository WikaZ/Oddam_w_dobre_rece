import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Step from "./step";
import icon_1 from "../assets/Icon-1.svg"
import icon_2 from "../assets/Icon-2.svg"
import icon_3 from "../assets/Icon-3.svg"
import icon_4 from "../assets/Icon-4.svg"
import line from "../assets/Line.svg"

class HomeIconPathSteps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Container>

                    <Row>
                        <Col>

                            <Step/>
                            <div className={"step"}>
                                <div>
                                    <img src={icon_1}/>
                                </div>

                                <span>Wybierz rzeczy</span>
                                <img src={line}/>
                                <p>ubrania, zabawki, sprzęt i inne</p>

                            </div>
                            <Step/>

                        </Col>
                        <Col></Col>
                        <Col>

                            <Step/>
                            <div className={"step"}>
                                <div>
                                <img src={icon_2}/>
                                </div>
                                <span>Spakuj je</span>
                                <img src={line}/>
                                <p>skorzystaj z worków na śmieci</p>

                            </div>
                            <Step/>

                        </Col>
                        <Col></Col>
                        <Col>

                            <Step/>
                            <div className={"step"}>
                                <div>
                                <img src={icon_3}/>
                                </div>
                                <span>Zdecyduj komu chcesz pomóc</span>
                                <img src={line}/>
                                <p>wybierz zaufane miejsce</p>
                            </div>
                            <Step/>

                        </Col>
                        <Col></Col>
                        <Col>

                            <Step/>
                            <div className={"step"}>
                                <div>
                                <img src={icon_4  }/>
                                </div>
                                <span>Zamów kuriera</span>
                                <img src={line}/>
                                <p>kurier przyjedzie w dogodnym terminie</p>

                            </div>
                            <Step/>

                        </Col>

                    </Row>

                </Container>
            </>
        )
    }
}

export default HomeIconPathSteps;