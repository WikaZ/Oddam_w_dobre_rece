import React from 'react';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>

                <label>Your email</label>
                <input type="email"/>
                <label>Your password</label>
                <input type="password"/>
                <input type="submit" value={"Log in"}/>
            </>
        )
    }
}

export default LogIn