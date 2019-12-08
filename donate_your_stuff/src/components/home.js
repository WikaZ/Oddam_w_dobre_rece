import React from 'react';
import HomeHeader from './homeHeader';
import HomeThreeCol from './homeThreeCol'
import HomeIconPath from './homeIconPath'
import HomeAboutUs from './homeAboutUs'
import HomeWhoWeHelp from './homeWhoWeHelp'
import HomeContactUs from './homeContactUs'
import HomeFooter from './homeFooter'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <HomeHeader/>
                < HomeThreeCol/>
                < HomeIconPath/>
                < HomeAboutUs/>
                < HomeWhoWeHelp/>
                < HomeContactUs/>
                < HomeFooter/>
            </>

        )
    }
}

export default Home