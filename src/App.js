import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import { Component } from 'react'
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export class App extends Component {


  render() {
    return (

      <Router>
      <div className="App">
        <div>
          <nav>
          <Link to="/home">Home</Link> | 
          <Link to="/sign-in">Sign-in</Link> | 
          <Link to="/sign-up">Sign-up</Link> |
          <Link to="/admin">Admin</Link> | 

          </nav>
        </div>

        <br></br>

        <Route exact path="/sign-in"><SignIn></SignIn></Route>

        <Route exact path="/sign-up"><SignUp></SignUp></Route>  

        <Route exact path="/admin"><Dashboard></Dashboard></Route>

        <Route exact path="/logout" ><Logout></Logout></Route>

      </div>
    
      </Router>    
      )
  }
}

export default App
