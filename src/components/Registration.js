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
            }
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
        let url = this.props.baseURL + '/users/login'
        let userInfo = [username, password]
        console.log('LOGIN')
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            this.setState({
                username: '',
                password: '',
                email: ''
            })
        })
        .catch(err=> console.log(err))
    }

    render() {
        return (
          <LoginModal
            handleSignup={this.handleSignup}
            handleLogin={this.handleLogin}
            buttonColor={"#52AE64"}
            disabledButtonColor={"#C7E4CD"}
            buttonHoverColor={"#A7D5B0"}
            fontFamily={"roboto"}
            errorMessage={"Incorrect username or password"}
            errorEnable={true}
          />
        );
      }
}   