import './App.css';
import { Component } from 'react'
import NavBar from './components/NavBar'
import Markets from './components/Markets'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './components/Registration';
import Stock from './components/Stock'


let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = process.env.REACT_APP_LOCAL_URL
} else {
  baseURL = process.env.REACT_APP_PROD_URL
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  logout = () =>{
    console.log('logout function')
    const url = baseURL + '/users/logout'
      fetch(url, {method:'GET'})
      .then(response=> response.json())
      .then(data => {
        this.setState({
          currentUser: ''
        })
      })
    }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* STOCK SHOW PAGE */}
            <Route path="/stocks">
              <NavBar currentUser={this.state.currentUser} logout={this.logout} />
              <Stock />

            </Route>

            {/* User Registration Page */}
            <Route path="/register">
              <NavBar currentUser={this.state.currentUser} logout={this.logout} />
              <Register baseURL={baseURL} setCurrentUser={this.setCurrentUser} />
            </Route>

            {/* HOME PAGE - KEEP AT BOTTOM */}
            <Route path="/">
              <NavBar currentUser={this.state.currentUser} logout={this.logout} />
              <Markets />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
