import { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            loading: false,
            error: null
        }
    }

    openModal() {
        this.setState({
            showModale: true,
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
        return (
            <div>
                <p>log in</p>
            </div>
        )
    }
}