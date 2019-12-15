import React from 'react';
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink
} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class WhoDoWeHelpNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <>
                {/*<ul style={{listStyleType: "none", display: "inline", width: "100px",}}>*/}
                {/*    <li><RouterLink to="/komu_pomagamy/fundacje">Fundacjom</RouterLink></li>*/}
                {/*    <li><RouterLink to="/komu_pomagamy/organizacje_pozarzadowe">Organizacjom pozarzadowym</RouterLink>*/}
                {/*    </li>*/}
                {/*    <li><RouterLink to="/komu_pomagamy/zbiorki_lokalne">Lokalnym zbiórkom</RouterLink></li>*/}
                {/*</ul>*/}
                {/*<ul>*/}
                {/*    <li><a href="" onClick={this.handleClick} data-name={"fundation"}>Fundacjom</a></li>*/}
                {/*    <li><a href="" onClick={this.handleClick} data-name={"organisation"}>Organizacjom pozarzadowym</a></li>*/}
                {/*    <li><a href="" onClick={this.handleClick} data-name={"localDontion"}>Lokalnym zbiórkom</a></li>*/}
                {/*</ul>*/}


            </>
        )
    }
}


export default WhoDoWeHelpNav;