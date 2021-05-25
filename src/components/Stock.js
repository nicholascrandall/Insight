import { Component } from 'react'

export default class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        const stockURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + process.env.REACT_APP_API_KEY
        fetch(stockURL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                stock: data
            })
        })
    }
    
    render() {
        console.log(this.state);
        if (this.state.stock) {
            return (
                <div>
                    <p>Stock info</p>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Stock Details Not Found</h3>
                </div>
            )
        }
    }
}