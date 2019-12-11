import React from 'react';
import HomeHeader from './homeHeaderSection/homeHeader';
import HomeThreeCol from './homeThreeColSection/homeThreeCol'
import HomeIconPath from './homeIconPathSection/homeIconPath'
import HomeAboutUs from './homeAboutUs'
import HomeWhoDoWeHelp from './homeWhoDoWeHelp'
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
                < HomeWhoDoWeHelp/>
                < HomeContactUs/>
                < HomeFooter/>
            </>

        )
    }
}

export default Home