import { Component } from 'react'

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
    }

    render() {
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