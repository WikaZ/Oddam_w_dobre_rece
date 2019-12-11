import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <label>Your name</label>
                <input type="text"/>
                <label>Your email</label>
                <input type="email"/>
                <label>Your password</label>
                <input type="password"/>
                <input type="submit" value={"Sign up"}/>
            </>
        )
    }
}

export default SignUp