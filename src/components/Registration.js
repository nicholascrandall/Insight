import { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

export default class Register extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        let url = this.props.baseURL + '/users/register'
        console.log(url)
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
                signedUp: true
            })
        })
        .catch(err=> console.log(err))
    }

    render() {
        if (this.state.signedUp) {
            return <Redirect to='/user/login' />
        }
        return (
            <div>
                <Form size="large" style={{width: '50%'}} onSubmit={(event)=>this.handleSubmit(event)}>
                    <Form.Input
                        fluid
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(event)=>this.handleChange(event)}
                    />
                    <Form.Input
                        fluid
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={(event)=>this.handleChange(event)}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        name='password'
                        id='password'
                        iconPositon='left'
                        value={this.state.password}
                        placeholder='Password'
                        type='password'
                        onChange={(event)=>this.handleChange(event)}
                    />
                    <Button color='blue' fluid size='large' className="signButton">
                        Sign Up
                    </Button>
                </Form>
            </div>
        )
    }
}