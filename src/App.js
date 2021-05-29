import './App.css';
import { Component } from 'react'
import NavBar from './components/NavBar'
import Markets from './components/Markets'
import Register from './components/Registration'
import Login from './components/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


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
    const url = baseURL + '/session/'
      fetch(url, {method:'DELETE'})
      .then(response=> response.json())
      .then(data => {
        this.setState({
          currentUser: ''
        })
      })
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* STOCK SHOW PAGE */}
            <Route path="/stocks">
              <NavBar />

            </Route>


            {/* User Login */}
            <Route path="/user/login">
              <NavBar />
              <Login baseURL={baseURL} />
            </Route>

            {/* User Registration */}
            <Route path="/user/new">
              <NavBar />
              <Register baseURL={baseURL} />
            </Route>

            {/* HOME PAGE - KEEP AT BOTTOM */}
            <Route path="/">
              <NavBar />
              <Markets />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
