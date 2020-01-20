import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/Decoration.svg";

class HomeContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            message: "",
            errors: {
                errorEmail: "",
                errorName: "",
                errorMessage: ""
            },
            status: false
        }
    }

    handleGetInfo = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.currentTarget.value.trim()
        });
        console.log(this.state.name, "name", this.state.email, "email");
    };
    postData = () => {

        let {name, email, message} = this.state;

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: name, email: email, message: message})
        }).then((res) => res.json())
            .then((data) => console.log(data, "moje dane"))
            .catch((err) => console.log(err))
    };


    handleValidate = (e) => {
        e.preventDefault();
        const {name, email, message, errors} = this.state;
        console.log('Name: ', name);
        let errorObj = errors;
        const validateEmail = RegExp(/^\S+@\S+\.\S+/g);
        const validateName = RegExp(/^\S+$/i);


        if (!name.length) {
            errorObj.errorName = "Podane imię jest nieprawidłowe";
            console.log("name nie jest wpisane");
        } else if (!validateName.test(name)) {
            console.log("zle wpisane imie", name);
            errorObj.errorName = "Podane imię jest nieprawidłowe"
        } else {
            errorObj.errorName = ""
        }

        if (!email.length) {
            errorObj.errorEmail = "Podany email jest nieprawidłowy!"
        } else if (!validateEmail.test(email)) {
            console.log("zle wpisane email");
            errorObj.errorEmail = "Podany email jest nieprawidłowy!"
        } else {
            errorObj.errorEmail = ""
        }
        if (message.length < 120) {
            errorObj.errorMessage = "Wiadomość musi mieć co najmniej 120 znaków!"
        } else {
            errorObj.errorMessage = ""
        }


        this.setState({
            errors: errorObj,
        });

        if (this.state.errors.errorMessage === "" && this.state.errors.errorEmail === "" && this.state.errors.errorName === "") {
            this.setState({
                status: true,
                name: "",
                email: "",
                message: ""
            });
            this.postData();

        } else {
            this.setState({
                status: false
            })
        }
    };


    render() {
        let errorName = this.state.errors.errorName;
        let errorEmail = this.state.errors.errorEmail;
        let errorMessage = this.state.errors.errorMessage;
        return (
            <Container className={"contactForm"}>
                <Row className={this.state.status === true ? "formHeaderSuccess" : 'formHeader'}>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={img} alt="dekoracja"/>
                    {this.state.status === true ? <div className={"successMessage"}><p>Wiadomość została wysłana!</p>
                            <p>Wkrótce sie skontaktujemy.</p></div>
                        : null}
                </Row>

                <form action="" className={"form"}>
                    <Row>
                        <Col id={"formLeftCol"} lg={6} md={6} xs={12}>
                            <label htmlFor={"name"}>Wpisz swoje imię</label>
                            <input type="text" placeholder={'Krzysztof'} value={this.state.name} name={"name"}
                                   onChange={this.handleGetInfo}/>
                            <p className={"validateData"}> {errorName}</p>
                        </Col>

                        <Col id={"formRightCol"} lg={6} md={6} xs={12}>
                            <label htmlFor={"name"}>Wpisz swój email</label>
                            <input type="email" placeholder={'abc@kyz.pl'} value={this.state.email} name={"email"}
                                   onChange={this.handleGetInfo}/>
                            <p className={"validateData"}> {errorEmail}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col id={"formMessage"}>
                            <label htmlFor={"message"}>Wpisz swoją wiadomość</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col id={'formTextarea'} lg={12} md={12}>
                            <textarea name="message" id=""
                                      placeholder={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos explicabo inventore officia perspiciatis quia ullam velit. "}
                                      value={this.state.message}
                                      onChange={this.handleGetInfo}></textarea>
                            <p className={"validateData"}>{errorMessage}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col lg={3} md={3} xs={12}>
                            <input type="submit" value={'Wyślij'} onClick={this.handleValidate}/>
                        </Col>
                    </Row>

                </form>


            </Container>

        )
    }
}

export default HomeContactForm

