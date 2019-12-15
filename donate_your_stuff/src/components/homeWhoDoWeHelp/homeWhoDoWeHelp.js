import React from 'react';
import HomeWhoDoWeHelpWrapper from './whoDoWeHelpWrapper'

class HomeWhoDoWeHelp extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <div id={"homeWhoDoWeHelp"} >
                <HomeWhoDoWeHelpWrapper links={["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"]}/>
            </div>

        )
    }
}
export default HomeWhoDoWeHelp