import { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
                <Link to='/' className='nav-link'>
                    <Menu.Item name='News'>
                        Financial News
                    </Menu.Item>
                </Link>
                

                <Menu.Item 
                name='Insight'
                >
                    Insight
                </Menu.Item>
                
                <Menu.Item position='right'>
                    <Link to='/user/login'>
                        <Button>Log in</Button>
                    </Link>
                    <Link to='/user/new'>
                        <Button>Sign Up</Button>
                    </Link>'
                </Menu.Item>
            </Menu>
        )
    }
}