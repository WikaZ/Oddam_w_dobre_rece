import React from "react";
import {Link} from "react-router-dom";


class BtnSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={"btnSignUpWrapper"}>
                <Link to="/rejestracja" className={"btnSignUp"}>

                        <span>ZORGANIZUJ <span>ZBIÓRKĘ</span></span>

                </Link>
            </div>

        )
    }
}

export default BtnSignUp