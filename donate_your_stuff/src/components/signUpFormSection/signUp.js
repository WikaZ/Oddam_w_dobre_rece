import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            pass:"",
            repeatPass:"",
            errors: {
                errorEmail: "",
                errorPass: "",
                errorRepeatPass: "",

            },
            status: false
        }
    }

    handleGetInfo=(e)=>{
        e.preventDefault();

        this.setState({
            [e.target.name]: e.currentTarget.value
        });
        console.log(this.state.email, "email", this.state.pass, "pass", this.state.repeatPass, "repPass");
    };

    handleValidate = (e) => {
        e.preventDefault();
        const {pass, email , repeatPass, errors} = this.state;
        console.log('pass: ', pass, "repeatPass:" ,repeatPass);
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

       if( pass === repeatPass){
            errorObj.errorRepeatPass = "";
           console.log("jest ok");
        } else{
            errorObj.errorRepeatPass = "Podane hasło jest niepoprawne!";
            console.log(" nie jest ok");
        }

        this.setState({
            errors: errorObj,
            pass: "",
            email: "",
            repeatPass:""

        });

        if (this.state.errors.errorPass === "" && this.state.errors.errorEmail === "" && this.state.errors.errorRepeatPass === "") {
            this.setState({
                status: true
            });


        } else {
            this.setState({
                status: false
            })
        }
    };
    render() {
        let errorPass = this.state.errors.errorPass;
        let errorRepeatPass = this.state.errors.errorRepeatPass;
        let errorEmail = this.state.errors.errorEmail;
        return (
            <Container>
                <Row className={"logInHeader"}>
                    <Col>
                        <div className={"formHeader alignContent"}>
                            <h1>Załóż konto</h1>

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
                            <label className={"logInPassLabel"}>Powtórz hasło</label>
                            <input type="password" value={this.state.repeatPass} name={"repeatPass"}
                                   onChange={this.handleGetInfo}/>
                            <p className={"validateData"}> {errorRepeatPass}</p>


                        </div>
                    </Col>
                    <Col lg={4} md={4}></Col>
                </Row>
                <Row className={'logInFooter'}>
                    <Col lg={3} md={3} xs={3}></Col>
                    <Col lg={6} md={6} xs={6}>
                        <div className={"inputFormBtn"}>
                            <button className={"logInBtn"}><Link to="/logowanie">Zaloguj się</Link></button>
                            <input type="submit" value={"Zalóż konto"} className={"logInBtn"} onClick={this.handleValidate}/>
                        </div>
                    </Col>
                    <Col lg={3} md={3} xs={3}></Col>
                </Row>
            </Container>

        )
    }
}

export default SignUp

