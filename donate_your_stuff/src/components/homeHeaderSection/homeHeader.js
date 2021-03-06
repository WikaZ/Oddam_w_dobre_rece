import React from 'react';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../../assets/Decoration.svg";
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink
} from "react-router-dom";
import MainUpperMenuBar from "./mainUpperNav";
import LogIn from "../logInFormSection/logIn";
import SignUp from "../signUpFormSection/signUp";
import CallToAction from "./callToAction"


import {Link} from "react-scroll";
import {animateScroll as scroll} from "react-scroll";


class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div className={"header"}>
                <Container fluid className={"containerStyle"}>
                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <div className={"MainUpperMenuBar"}>*/}
                    {/*            <MainUpperMenuBar/>*/}
                    {/*        </div>*/}

                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <div className={"mainMenu"}>*/}

                    {/*            <ul className={"headerMenu"}>*/}
                    {/*                <li><Link activeClassName="activeLink"*/}
                    {/*                          spy={true}*/}
                    {/*                          smooth={true}*/}
                    {/*                          offset={0}*/}
                    {/*                          duration={500}*/}
                    {/*                          to={"header"}>Start</Link>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}

                    {/*                    <Link activeClassName="activeLink"*/}
                    {/*                          spy={true}*/}
                    {/*                          smooth={true}*/}
                    {/*                          offset={0}*/}
                    {/*                          duration={500}*/}
                    {/*                          to={'homeIconPath'}>O co chodzi?</Link>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <Link activeClassName="activeLink"*/}
                    {/*                          spy={true}*/}
                    {/*                          smooth={true}*/}
                    {/*                          offset={0}*/}
                    {/*                          duration={500}*/}
                    {/*                          to={'homeAboutUs'}>O nas</Link>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <Link activeClassName="activeLink"*/}
                    {/*                          spy={true}*/}
                    {/*                          smooth={true}*/}
                    {/*                          offset={0}*/}
                    {/*                          duration={500}*/}
                    {/*                          to={'homeWhoDoWeHelp'}>Fundacja i organizacje</Link>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <Link activeClassName="activeLink"*/}
                    {/*                          spy={true}*/}
                    {/*                          smooth={true}*/}
                    {/*                          offset={0}*/}
                    {/*                          duration={500}*/}
                    {/*                          to={'homeContactUs'}>Kontakt</Link>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}

                    {/*        </div>*/}
                    {/*    </Col>*/}


                    {/*</Row>*/}
                    <Row>
                        <Col lg={5} md={5} xs={12} className={"resetPaddings"}></Col>
                        {/*<Col lg={1} md={1}></Col>*/}
                        <Col lg={5} md={5} xs={12} className={"mainHeaderText"}>
                            <div className={"mainHeading"}>
                                <Container className={"mainHeadingContent"}>
                                    <Row>
                                        <Col  className={"alignContent"}>
                                            <h1 className={"mainHeading"}>Zacznij pomagać!</h1>
                                            <h1 className={"mainHeading"}>Oddaj niechciane rzeczy w zaufane ręce</h1>
                                        </Col>
                                    </Row>
                                    <Row className={"homeDecoration"}>
                                        <Col className={"alignContent"}>
                                            <img src={img} alt="decoration" />
                                        </Col>
                                    </Row>
                                    <Row className={"homeCallToAction"}>
                                        <Col className={"alignContent"}>
                                            <CallToAction/>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg={2} md={2}></Col>
                    </Row>


                </Container>
            </div>
        )
    }
}

export default HomeHeader