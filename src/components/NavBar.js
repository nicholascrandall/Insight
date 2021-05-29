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
            error: null
        }
    }

    openModal() {
        this.setState({
            showModal: true,
        })
    }

    closeModale() {
        this.setState({
            showModal: false,
            loading: false,
            error: null
        })
    }

    onLoginSuccess(method, response) {
        console.log('logged in with ' + method);
    }

    onLoginFail(method, response) {
        console.log('login failed ' + method);
        this.setState({
            error: response
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
            error: null
        })
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
                onCloseModal={this.closeModale.bind(this)}
                loading={this.state.loading}
                error={this.state.error}
                tabs={{
                    onChange: this.onTabsChange.bind(this),
                }}
                form={{
                    loginInputs: {
                        email: {
                            type: "email",
                            id: "email",
                            name: "email",
                            placeholder: "Email"
                        },
                        username: {
                            type: "text",
                            id: "username",
                            name: "username",
                            placeholder: "Username"
                        },
                        password: {
                            type: "password",
                            id: "password",
                            name: "password",
                            placeholder: "Password"
                        }
                    }
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