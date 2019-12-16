import React from 'react';
import HomeHeader from './homeHeaderSection/homeHeader';
import HomeThreeCol from './homeThreeColSection/homeThreeCol'
import HomeIconPath from './homeIconPathSection/homeIconPath'
import HomeAboutUs from './homeAboutUsSection/homeAboutUs'
import HomeWhoDoWeHelp from './homeWhoDoWeHelp/homeWhoDoWeHelp'
import HomeContactUs from './homeContactForm/homeContactUs'
import HomeFooter from './homeContactForm/homeFooter'

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
                {/*< HomeFooter/>*/}
            </>

        )
    }
}

export default Home