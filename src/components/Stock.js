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
                    <h2>Previous Close</h2>

                    <h3>Open Price</h3>
                    <p>${this.state.stock.results[0].o}</p>

                    <h3>Highest Price</h3>
                    <p>${this.state.stock.results[0].h}</p>

                    <h3>Lowest Price</h3>
                    <p>${this.state.stock.results[0].l}</p>

                    <h3>Close Price</h3>
                    <p>${this.state.stock.results[0].c}</p>

                    <h3>Trading Volume</h3>
                    <p>{this.state.stock.results[0].v}</p>

                    <h3>Number of transactions</h3>
                    <p>{this.state.stock.results[0].n}</p>
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