import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../../assets/Decoration.svg";

class HomeIconPathHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(

                            <div className={"homeIconPathHeader"}>
                                <h1 className={"iconPathHeaderText mainHeading"}>Wystarczą 4 proste kroki</h1>
                                <img src={img} alt="decoration" />
                            </div>

        )
    }
}

export default HomeIconPathHeader ;
