import { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Menu 
                fixed='top'
                inverted={true}
                className='nav-menu'
            >
                <Menu.Item name='Accounts'>
                    Accounts
                    Research
                </Menu.Item>

                <Menu.Item 
                name='Insight'
                >
                    Insight
                </Menu.Item>
                
                <Menu.Item position='right'>
                    <Button>Log in</Button>
                    <Button>Sign Up</Button>
                </Menu.Item>
            </Menu>
        )
    }
}