import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export class Logout extends Component {
    render() {
        return (
            <div>
                You have been logged out. <br></br>
                <Link to="/sign-in">Login</Link>
            </div>
        )
    }
}

export default Logout
