import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/Decoration.svg";

class HomeContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <div className={"contactForm"}>
                <div className={'formHeader'}><h1>Skontaktuj się z nami</h1>
                <img src={img} alt="dekoracja"/>
                </div>
                <label htmlFor={"name"}>Wpisz swoje imię</label>
                <input type="text" placeholder={'Krzysztof'}/>
                    <label htmlFor={"name"}>Wpisz swój email</label>
                <input type="email" placeholder={'abc@kyz.pl'}/>
                    <label htmlFor={"message"}>Wpisz swoją wiadomość</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos explicabo inventore officia perspiciatis quia ullam velit. Ad cum magnam pariatur soluta suscipit? Dolorum perspiciatis, quae. Molestiae quia voluptas voluptatibus?"}></textarea>
                    <input type="submit" value={'Wyślij'}/>


            </div>

        )
    }
}
export default  HomeContactForm