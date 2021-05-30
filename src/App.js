import './App.css';
import { Component } from 'react'
import NavBar from './components/NavBar'
import Markets from './components/Markets'
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
              <NavBar baseURL={baseURL}/>

            </Route>

            {/* User Test Page */}
            <Route path="/test">
              <NavBar baseURL={baseURL}/>
            </Route>

            {/* HOME PAGE - KEEP AT BOTTOM */}
            <Route path="/">
              <NavBar baseURL={baseURL}/>
              <Markets />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
