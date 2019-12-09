import React from 'react';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../assets/Decoration.svg";
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink
} from "react-router-dom";
import MainUpperMenuBar from "./mainUpperNav";
import LogIn from "./logIn";
import SignUp from "./signUp";
import CallToAction from "./callToAction"


import {Link} from "react-scroll";
import {animateScroll as scroll} from "react-scroll";


class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSetActive = (to) => {
        console.log(to);
    }

    render() {
        return (
            <div className={"header"}>
                <Container fluid className={"containerStyle"}>
                    <Row>
                        <Col lg={{offset: 9, span: 3}}>
                            <HashRouter>
                                <>
                                    <MainUpperMenuBar/>
                                    {/*<Switch>*/}
                                    {/*    <Route path="/logowanie" component={LogIn}/>*/}
                                    {/*    <Route path="/konto" component={SignUp}/>*/}
                                    {/*</Switch>*/}
                                </>
                            </HashRouter>


                            <div>

                                <ul className={"headerMenu"}>
                                    <li><Link activeClass="activeLink"
                                              spy={true}
                                              smooth={true}
                                              offset={0}
                                              duration={500}
                                              to={"header"}>Start</Link>
                                    </li>
                                    <li>

                                        <Link activeClass="activeLink"
                                              spy={true}
                                              smooth={true}
                                              offset={0}
                                              duration={500}
                                              to={'homeThreeCol'}>O co chodzi</Link>
                                    </li>
                                    <li>
                                        <Link activeClass="activeLink"
                                              spy={true}
                                              smooth={true}
                                              offset={0}
                                              duration={500}
                                              to={'homeAboutUs'}>O nas</Link>
                                    </li>
                                    <li>
                                        <Link activeClass="activeLink"
                                              spy={true}
                                              smooth={true}
                                              offset={0}
                                              duration={500}
                                              to={'homeWhoDoWeHelp'}>Fundacja i organizacje</Link>
                                    </li>
                                    <li>
                                        <Link activeClass="activeLink"
                                              spy={true}
                                              smooth={true}
                                              offset={0}
                                              duration={500}
                                              to={'homeContactUs'}>Kontakt</Link>
                                    </li>
                                </ul>

                            </div>
                        </Col>


                    </Row>
                    <Row>
                        <Col lg={{offset: 6, span: 6}} className={"mainHeaderText"}>
                            <h1>Zacznij pomagac!</h1>
                            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <img src={img} alt="decoration"/>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{offset: 6, span: 6}} >
                            <CallToAction/>

                        </Col>
                    </Row>
                    <Row>

                    </Row>

                </Container>
            </div>
        )
    }
}

export default HomeHeader