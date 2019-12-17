import React from 'react';
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import WhoDoWeHelpNav from "./whoDoWeHelpNav/whoDoWeHelpNav";
import FundationsSection from "./fundationSection/fundationsSection";
import OrganisationsSection from "./organisationsSection/organisationsSection";
import LocalDonationCenterSection from "./localDonationCenterSection/localDonationCenterSection";


class WhoDoWeHelpWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLinkIndex: 1
        }
    }

    handleClickShowSection = (i) => {
        this.setState({
            currentLinkIndex: i
        })

    };
    handlePassLinksId = (e, i) => {
        e.preventDefault();
        this.handleClickShowSection(i);
        console.log(i, "id el");
    }


    render() {
        const currentLinkIndex = this.state.currentLinkIndex;

        return (
            <>
                <div >
                    <ul className={"whoDoWeHelpLinks"}>

                        {this.props.links.map((el, i) => {

                            return (
                                <li key={i} onClick={(e) => this.handlePassLinksId(e, i)} id={i} className={currentLinkIndex === i ? "active" : "nonactive"}><a href="" >{el}</a>
                                </li>

                            )

                        })
                        }
                    </ul>
                </div>

                {currentLinkIndex === 0 ? <FundationsSection/> :
                    (currentLinkIndex === 1 ? <OrganisationsSection/> : <LocalDonationCenterSection/>)}
                {
                }


            </>
        )
    }
}


export default WhoDoWeHelpWrapper


