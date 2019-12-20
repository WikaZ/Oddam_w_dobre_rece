import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import img from "../../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUp from "../signUpFormSection/signUp";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",

            errors: {
                errorEmail: "",
                errorPass: "",

            },
            status: false
        }
    }

    handleGetInfo=(e)=>{
        e.preventDefault();

        this.setState({
            [e.target.name]: e.currentTarget.value.trim()
        });
        console.log(this.state.email, "email", this.state.pass, "pass");
    };

    handleValidate = (e) => {
        e.preventDefault();
        const {pass, email , errors} = this.state;
        console.log('pass: ', pass);
        let errorObj = errors;
        const validateEmail = RegExp(/^\S+@\S+\.\S+/g);
        if (!email.length) {
            errorObj.errorEmail = "Podany email jest nieprawidłowy!"
        } else if (!validateEmail.test(email)) {
            console.log("zle wpisane email");
            errorObj.errorEmail = "Podany email jest nieprawidłowy!"
        } else {
            errorObj.errorEmail = ""
        }
        if (pass.length < 6) {
            errorObj.errorPass = "Podane hasło jest za krótkie!"
        } else {
            errorObj.errorPass = ""
        }
        this.setState({
            errors: errorObj,
            // pass: "",
            // email: ""

        });

        if (this.state.errors.errorPass === "" && this.state.errors.errorEmail === "" ) {
            this.setState({
                status: true,
                pass: "",
                email: ""
            });


        } else {
            this.setState({
                status: false
            })
        }
    };
    render() {
        let errorPass = this.state.errors.errorPass;
        let errorEmail = this.state.errors.errorEmail;
        return (
            <>
                <Container>
                    <Row className={"logInHeader"}>
                        <Col>
                            <div className={"formHeader alignContent"}>
                                <h1>Zaloguj się</h1>

                                <img src={img} alt="dekoracja"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4}></Col>
                        <Col lg={4} md={4} xs={12}>
                            <div className={"alignLoginForm"}>

                                <label>Email</label>
                                <input type="email" value={this.state.email} name={"email"}
                                       onChange={this.handleGetInfo}/>

                                <p className={"validateData"}> {errorEmail}</p>
                                <label className={"logInPassLabel"}>Hasło</label>
                                <input type="password" value={this.state.pass} name={"pass"}
                                       onChange={this.handleGetInfo}/>
                                <p className={"validateData"}> {errorPass}</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4}></Col>
                    </Row>
                    <Row className={'logInFooter'}>
                        <Col lg={3} md={3} xs={3}></Col>
                        <Col lg={6} md={6} xs={6}>
                            <div className={"inputFormBtn"}>
                                <button className={"logInBtn"}><Link to="/rejestracja">Załóż konto</Link></button>
                                <input type="submit" value={"Zaloguj się"} className={"logInBtn"} onClick={this.handleValidate}/>
                            </div>
                        </Col>
                        <Col lg={3} md={3} xs={3}></Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default LogIn