import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div>
                This is Dashboard. <br></br>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}

export default Dashboard
