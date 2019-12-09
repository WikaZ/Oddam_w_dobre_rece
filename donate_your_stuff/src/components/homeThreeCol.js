import React from 'react';

class HomeThreeCol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id={"homeThreeCol"} style={{height: "350px", backgroundColor: "red"}}>
                <p>Hi, Im HomeThreeCol</p>
            </div>

        )
    }
}

export default HomeThreeCol