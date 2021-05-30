import { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../images/insight-logo.png'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
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
                    <Link to='/register'>
                        <button>Log In</button>
                        <button>Sign Up</button>
                    </Link>
                </Menu.Item>
                
            </Menu>

            </>
        )
    }
}