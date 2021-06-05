import { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'

export default class Stock extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    getStockData = () => {
        const stockURL = 'https://api.polygon.io/v2/aggs/ticker/' + this.props.stockTicker + '/prev?unadjusted=true&apiKey=' + process.env.REACT_APP_API_KEY
        fetch(stockURL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                stock: data
            })
        })
    }

    getStockNews = () => {
        const stocknewsURL = "https://api.polygon.io/v2/reference/news?limit=5&order=descending&sort=published_utc&ticker=" + this.props.stockTicker + "&published_utc.gte=2021-04-26&apiKey=" + process.env.REACT_APP_API_KEY
        fetch(stocknewsURL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                stockNews: data
            })
        })
    }

    getMarketHolidays = () => {
        const holidaysURL = "https://api.polygon.io/v1/marketstatus/upcoming?&apiKey=" + process.env.REACT_APP_API_KEY
        fetch(holidaysURL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                holidays: data
            })
        })
    }

    componentDidMount = () => {
       this.getStockData()
       this.getStockNews()
       this.getMarketHolidays()
    }

    render() {
        console.log(this.state)
       if (this.state.stockNews && this.state.stock && this.state.holidays) {
           return (
                    <div>
                        {/* Upcoming Holidays */}
                        <Segment className="col1">
                            <Header as='h2'>Previous Day's Close for {this.state.stock.results[0].T}</Header>
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
                        </Segment>

                        {/* Previous Day's Close */}
                        <Segment className="col3">
                            <Header as='h2'>Upcoming Market Holidays</Header>
                            {this.state.holidays.length > 0?
                                this.state.holidays.map((holiday, index) => {
                                    return (
                                        <>
                                            <h3>Exchange: {holiday.exchange}</h3>
                                            <p>{holiday.name}</p>
                                            <p>{holiday.date}</p>
                                        </>
                                    )
                                })
                                : <h2>No Articles Found</h2>}
                        </Segment>

                        {/* Stock News */}
                        <Segment className="col2">
                            <Header as='h2'>News for {this.state.stock.results[0].T}</Header>
                            {this.state.stockNews.results.length > 0?
                                this.state.stockNews.results.map((article, index) => {
                                    return (
                                        <>
                                        <a href={article.article_url}><h3>{article.title}</h3>
                                        </a>
                                        <img src={article.image_url} className="newsImage" alt="stock ticker article" />
                                        <li key={index}>{article.description}</li>
                                        </>
                                    )
                                })
                                : <h2>No Articles Found</h2>}
                        </Segment>
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