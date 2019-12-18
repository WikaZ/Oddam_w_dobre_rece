import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainUpperMenuBar from "../homeHeaderSection/mainUpperNav";
import {Link as RouterLink} from "react-scroll";


export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container fluid className={"containerStyle"}>
                <Row>
                    <Col>
                        <div className={"MainUpperMenuBar"}>
                            <MainUpperMenuBar/>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={"mainMenu"}>

                            <ul className={"headerMenu"}>
                                <li><RouterLink activeClassName="activeLink"
                                          spy={true}
                                          smooth={true}
                                          offset={0}
                                          duration={500}
                                          to={"header"}>Start</RouterLink>
                                </li>
                                <li>

                                    <RouterLink activeClassName="activeLink"
                                          spy={true}
                                          smooth={true}
                                          offset={0}
                                          duration={500}
                                          to={'homeIconPath'}>O co chodzi?</RouterLink>
                                </li>
                                <li>
                                    <RouterLink activeClassName="activeLink"
                                          spy={true}
                                          smooth={true}
                                          offset={0}
                                          duration={500}
                                          to={'homeAboutUs'}>O nas</RouterLink>
                                </li>
                                <li>
                                    <RouterLink activeClassName="activeLink"
                                          spy={true}
                                          smooth={true}
                                          offset={0}
                                          duration={500}
                                          to={'homeWhoDoWeHelp'}>Fundacja i organizacje</RouterLink>
                                </li>
                                <li>
                                    <RouterLink activeClassName="activeLink"
                                          spy={true}
                                          smooth={true}
                                          offset={0}
                                          duration={500}
                                          to={'homeContactUs'}>Kontakt</RouterLink>
                                </li>
                            </ul>

                        </div>
                    </Col>


                </Row>
            </Container>
        )
    }
}