import { Component } from 'react'
import LoginModal from "react-login-modal";
import { Redirect } from 'react-router-dom'

export default class Register extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            creds: '',
            signUp: {
                password: "",
                username: "",
                email: "",
            },
            login: {
                username: "",
                password: ""
            },
            signUpSuccess: false,
            logInSuccess: false
        }
    }

    handleSignup = (username, email, password) => {
        const signUp = this.state.signUp
        signUp.password = password;
        signUp.username = username;
        signUp.email = email

        this.setState({
            signUp,
          }, () => console.log(this.state.signUp));

        let url = this.props.baseURL + '/users/register'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state.signUp),
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            this.setState({
                username: '',
                password: '',
                email: '',
            })
        })
        .catch(err=> console.log(err))
    }

    handleLogin = (username, password) => {
        const login = this.state.login
        login.password = password;
        login.username = username;

        this.setState({
            login,
          }, () => console.log(this.state.login));

        let url = this.props.baseURL + '/users/login'
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state.login),
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.setCurrentUser(data.data)
            this.setState({
                username: '',
                password: '',
                email: '',
                logInSuccess: data.message
            })
        })
        .catch(err=> console.log(err))
    }

    render() {
        if (this.state.logInSuccess) {
            return <Redirect to='/' />
        }
        return (
          <LoginModal
            handleSignup={this.handleSignup}
            handleLogin={this.handleLogin}
            buttonColor={"#52AE64"}
            disabledButtonColor={"#C7E4CD"}
            buttonHoverColor={"#A7D5B0"}
            fontFamily={"roboto"}
            errorMessage={"Incorrect username or password"}
            errorEnable={false}
          />
        );
      }
}   