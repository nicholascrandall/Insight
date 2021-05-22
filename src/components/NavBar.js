import { Component } from 'react'
import { Menu, Button, Header } from 'semantic-ui-react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Header 
            className="App-header"
            size="small"
            >
            <Menu 
                fixed='top'
                inverted='true'
            >
                <Menu.Item name='Accounts'>
                    Accounts
                </Menu.Item>

                <Menu.Item name='Research'>
                    Research
                </Menu.Item>

                <Menu.Item 
                position='center'
                name='Insight'
                >
                    Insight
                </Menu.Item>
                
                <Menu.Item position='right'>
                    <Button>Log in</Button>
                    <Button>Sign Up</Button>
                </Menu.Item>
            </Menu>
            </Header>
        )
    }
}