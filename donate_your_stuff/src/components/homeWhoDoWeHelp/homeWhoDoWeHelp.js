import React from 'react';
import HomeWhoDoWeHelpWrapper from './whoDoWeHelpWrapper';
import img from "../../assets/Decoration.svg";

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
                    <HomeWhoDoWeHelpWrapper links={["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"]}/>
                </div>
            </>

        )
    }
}

export default HomeWhoDoWeHelp