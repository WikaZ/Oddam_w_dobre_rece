import React from 'react';

class HomeFooter extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <div id={"homeFooter"} style={{height:"350px", backgroundColor:"navy"}}>
                <p>Hi, Im homefooter</p>
            </div>

        )
    }
}
export default HomeFooter