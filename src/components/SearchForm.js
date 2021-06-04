import { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stockTicker: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            stockTicker: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.setStockSymbol(this.state.stockTicker)
        this.setState({
            stockSearched: true
        })
    }

    render() {
        if (this.state.stockSearched) {
            return <Redirect to="/stocks" />
        }
        return (
            <div className="searchContainer">
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    className="searchInput"
                    value={this.state.stockTicker}
                    placeholder="Enter Stock Symbol (GOOG)"
                    onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}