import React from 'react';
import HomeWhoDoWeHelpWrapper from './whoDoWeHelpWrapper';
import img from "../../assets/Decoration.svg";
import {HashRouter} from "react-router-dom";

class HomeWhoDoWeHelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <>
                <section className={"WhoDoWeHelpHeader"}>
                    <h1>Komu pomagamy?</h1>
                    <img src={img} alt="Decoration"/>

                </section>
                <div id={"homeWhoDoWeHelp"}>

                    <HomeWhoDoWeHelpWrapper links={[<p>Fundacjom</p>, <p>Organizacjom <span className={"newLineHeader"}> pozarządowym</span></p>, <p>Lokalnym <span className={"newLineHeader"}>zbiórkom</span></p>]}/>

                </div>
            </>

        )
    }
}

export default HomeWhoDoWeHelp