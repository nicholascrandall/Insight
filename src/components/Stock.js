import { Component } from 'react'

export default class Stock extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount = () => {
        const stockURL = 'https://api.polygon.io/v2/aggs/ticker/AAPL/prev?unadjusted=true&apiKey=' + process.env.REACT_APP_API_KEY
        fetch(stockURL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                stock: data
            })
        })
    }

    render() {
        console.log(this.state)
       if (this.state.stock) {
           return (
                <div>
                    <p>Stock API Working</p>
                </div>
           )
       } else {
           return (
            <div>
               <h2>Stock API Request Limit Reached</h2>
               <h2>Retry in one minute</h2>
           </div>
           )
       }
    }
}