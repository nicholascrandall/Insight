import { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../images/insight-logo.png'
import ReactModalLogin from 'react-modal-login'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            loading: false,
            error: null,
            username: '',
            password: '',
            email: '',
        }
    }

    openModal() {
        this.setState({
            showModal: true,
        })
    }

    closeModal() {
        this.setState({
            showModal: false,
            loading: false,
            error: null
        })
    }

    startLoading() {
        this.setState({
            loading: true
        })
    }

    finishLoading() {
        this.setState({
            loading: false
        })
    }

    onTabsChange() {
        this.setState({
            error: null,
            username: '',
            password: '',
            email: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        let url = this.props.baseURL + '/users/register'
        console.log('REGISTRATION')
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state),
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

    handleLogin = (event) => {
        let url = this.props.baseURL + '/users/login'
        console.log('LOGIN')
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state),
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
        console.log(this.state)
        return (
            <>
            <Menu 
                fixed='top'
                inverted={true}
                className='nav-menu'
            >
                <Link to='/'>
                    <Menu.Item name='Logo' className='item'>
                        <img src={logo} alt="insight logo" className="logo" />
                    </Menu.Item>
                </Link>
               
                <Link to='/'> 
                    <Menu.Item name='News' className='item'>
                        Insight
                    </Menu.Item>
                </Link>
                
                <Menu.Item className='buttons'>
                    <button onClick={() => this.openModal()}>Log In</button>
                    
                    <button onClick={() => this.openModal()}>Sign Up</button>
                </Menu.Item>
                
            </Menu>

            <ReactModalLogin
                visible={this.state.showModal}
                onCloseModal={this.closeModal.bind(this)}
                loading={this.state.loading}
                error={this.state.error}
                tabs={{
                    onChange: this.onTabsChange.bind(this),
                }}
                form={{
                    loginInputs: [
                        {
                            type: "email",
                            id: "email-login",
                            name: "email",
                            placeholder: "Email (Login)"
                        },
                        {
                            type: "text",
                            id: "username-login",
                            name: "username",
                            placeholder: "Username (Login)"
                        },
                        {
                            type: "password",
                            id: "password-login",
                            name: "password",
                            placeholder: "Password (Login)"
                            
                        }
                    ],
                    loginBtn: {
                        label: "Log In"
                    },
                    onLogin: this.handleLogin(),
                    registerInputs: [
                        {
                            type: "email",
                            id: "email-register",
                            name: "email",
                            placeholder: "Email (Register)"
                        },
                        {
                            type: "text",
                            id: "username-register",
                            name: "username",
                            placeholder: "Username (Register)"
                        },
                        {
                            type: "password",
                            id: "password-register",
                            name: "password",
                            placeholder: "Password (Register)"
                        }
                    ],
                    registerBtn: {
                        label: "Create Account"
                    },
                    onRegister: this.handleSubmit(),
                }}

                loginError={{
                    label: "Couldn't sign in, please try again."
                }}
                registerError={{
                    label: "Couldn't register, please try again."
                }}
                startLoading={this.startLoading.bind(this)}
                finishLoading={this.finishLoading.bind(this)}

                />
            </>
        )
    }
}