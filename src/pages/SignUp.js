import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <div className="sign-up-class">
            <form className="Form-fields" onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="firstname">Firstname: </label>
                <input type="text" id="firstname" placeholder="Enter your firstname" name="firstname"></input>
                </div>
                <div>
                <label htmlFor="Lastname">lastname: </label>
                <input type="text" id="lastname" placeholder="Enter your lastname" name="lastname"></input>
                </div>
                <div>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" placeholder="Enter your email" name="email"></input>
                </div>
                <div>
                <label htmlFor="phoneNumber">Mobile: </label>
                <input type="text" id="phoneNumber" placeholder="Enter your mobile number" name="phoneNumber"></input>
                </div>
                <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" placeholder="Enter your email" name="password"></input>
                </div>
                <div>
                <button type="submit">Sign-Up</button>
                </div>
            </form>
           </div>
        )
    }
}

export default SignUp
