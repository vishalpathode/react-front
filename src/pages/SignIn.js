import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthService from './AuthService';

export class SignIn extends Component {


  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        message: '',
    }
    this.login = this.login.bind(this);
}

componentDidMount() {
    localStorage.clear();
}

login = (e) => {
    e.preventDefault();
    const credentials = {email: this.state.email, password: this.state.password};
    console.log(credentials.email +" "+credentials.password)
    AuthService.login(credentials).then(res => {
        if(res.status === 200){
            localStorage.setItem("userInfo", JSON.stringify(res.data.user));
            //this.props.history.push('/list-user');
            console.log('UserDetails: '+localStorage.userInfo.user.firstname);
        }else { 
            this.setState({message: res.data.message});
            console.log('Error::: '+ this.message);
        }
    });
};

onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

render() {
    return(
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        React User Application
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Typography variant="h4" style={styles.center}>Login</Typography>
                <form>
                    <Typography variant="h4" style={styles.notification}>{this.state.message}</Typography>
                    <TextField type="email" label="EMAIL" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>

                    <TextField type="password" label="PASSWORD" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange}/>

                    <Button variant="contained" color="secondary" onClick={this.login}>Login</Button>
                </form>
            </Container>
        </React.Fragment>
    )
}

}

const styles= {
center :{
    display: 'flex',
    justifyContent: 'center'

},
notification: {
    display: 'flex',
    justifyContent: 'center',
    color: '#dc3545'
}
}
export default SignIn
