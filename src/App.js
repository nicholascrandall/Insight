import './App.css';
import { Component } from 'react'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
