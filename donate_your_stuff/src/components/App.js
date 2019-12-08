import React from 'react';
import Home from './home';
import {HashRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <HashRouter>



                        <Route exact path={"/"} component={Home}/>



            </HashRouter>
        )
    }
}

export default App