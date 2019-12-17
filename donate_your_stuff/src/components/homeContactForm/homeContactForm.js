import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/Decoration.svg";

class HomeContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container className={"contactForm"}>
                <Row className={'formHeader'}>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={img} alt="dekoracja"/>
                </Row>

                <form action="" className={"form"}>
                    <Row>
                        <Col id={"formLeftCol"} lg={6} md={6} xs={12}>
                            <label htmlFor={"name"}>Wpisz swoje imię</label>
                            <input type="text" placeholder={'Krzysztof'}/>
                        </Col>

                        <Col id={"formRightCol"} lg={6} md={6} xs={12}>
                            <label htmlFor={"name"}>Wpisz swój email</label>
                            <input type="email" placeholder={'abc@kyz.pl'}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col id={"formMessage"}>
                        <label htmlFor={"message"}>Wpisz swoją wiadomość</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col id={'formTextarea'} lg={12} md={12}>
                            <textarea name="message" id=""
                                      placeholder={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos explicabo inventore officia perspiciatis quia ullam velit. "}></textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col lg={3} md={3} xs={12}>
                        <input type="submit" value={'Wyślij'}/>
                        </Col>
                    </Row>

                </form>


            </Container>

        )
    }
}

export default HomeContactForm