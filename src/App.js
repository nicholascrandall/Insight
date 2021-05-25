import './App.css';
import { Component } from 'react'
import NavBar from './components/NavBar'
import Markets from './components/Markets'
import Register from './components/Register'


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

  render() {
    return (
      <div className="App">
        <NavBar />
        <Markets />
        <Register baseURL={baseURL} />
      </div>
    );
  }
}

export default App;
