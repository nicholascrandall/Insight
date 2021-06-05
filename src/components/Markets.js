import { Component } from 'react'

export default class Markets extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        const stockURL = 'https://free-news.p.rapidapi.com/v1/search?q=Market&lang=en'
        fetch(stockURL, {
            method: "GET",
            headers: {
                "x-rapidapi-key": process.env.REACT_APP_NEWS_KEY,
		        "x-rapidapi-host": "free-news.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                news: data
            })
        })
    }
    
    render() {
        if (this.state.news) {
            return (
                <div className="rundown">
                    <h2>Daily Rundown</h2>
                    <br />
                    <ul>
                        {this.state.news.status === "ok" ?
                        this.state.news.articles.map((article, index) => {
                            return (
                                <>
                                <a href={article.link}><h3>{article.title}</h3>
                                </a>
                                <img src={article.media} className="newsImage" alt="business article" />
                                <li key={index}>{article.summary}</li>
                                </>
                            )
                        })
                        : <h2>No Articles Found</h2>}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>News API Request Limit Reached (100/day)</h2>
                </div>
            )
        }
    }
}