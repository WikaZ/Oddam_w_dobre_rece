import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Step from "./step";
import icon_1 from "../../assets/Icon-1.svg"
import icon_2 from "../../assets/Icon-2.svg"
import icon_3 from "../../assets/Icon-3.svg"
import icon_4 from "../../assets/Icon-4.svg"
import line from "../../assets/Line.svg"

class HomeIconPathSteps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Container fluid className={"stepWrapper"}>

                    <Row>
                        <Col lg={2} md={2} xs={2}></Col>
                        <Col>
                            <div className={"alignSteps"}>
                                <Step/>
                                <div className={"step"}>
                                    <div>
                                        <img src={icon_1}/>
                                    </div>

                                    <span>Wybierz rzeczy</span>
                                    <img src={line}/>
                                    <p>ubrania, zabawki,<span id={"newLineParagraph"}>sprzęt i inne</span></p>

                                </div>
                                <Step/>


                                <Step/>
                                <div className={"step"}>
                                    <div>
                                        <img src={icon_2}/>
                                    </div>
                                    <span>Spakuj je</span>
                                    <img src={line}/>
                                    <p>skorzystaj z <span id={"newLineParagraph"}>worków na śmieci</span></p>

                                </div>
                                <Step/>


                                <Step/>
                                <div className={"step"}>
                                    <div>
                                        <img src={icon_3}/>
                                    </div>
                                    <p id={"thirdStep"}>Zdecyduj komu<span
                                        id={"newLineParagraph"}> chcesz pomóc</span></p>
                                    <img src={line}/>
                                    <p>wybierz zaufane <span id={"newLineParagraph"}>miejsce</span></p>
                                </div>
                                <Step/>


                                <Step/>
                                <div className={"step"}>
                                    <div>
                                        <img src={icon_4}/>
                                    </div>
                                    <span>Zamów kuriera</span>
                                    <img src={line}/>
                                    <p>kurier przyjedzie <span id={"newLineParagraph"}>w dogodnym terminie</span></p>

                                </div>
                                <Step/>
                            </div>

                        </Col>

                        <Col lg={2} md={2} xs={2}></Col>

                    </Row>

                </Container>
            </>
        )
    }
}

export default HomeIconPathSteps;