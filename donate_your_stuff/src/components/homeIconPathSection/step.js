import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Step extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
          <>

                  {this.props.children}


              </>
        )
    }
}

export default Step;