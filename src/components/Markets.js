import { Component } from 'react'

export default class Markets extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        const stockURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&apiKey=' + process.env.REACT_APP_NEWS_KEY
        fetch(stockURL)
        .then(response => response.json())
        .then(data => {
        //    if (data.status === "OK") {
            this.setState({
                news: data
            })
        // }
        })
    }
    
    render() {
        console.log(this.state);
        if (this.state.news) {
            return (
                <div className="rundown">
                    <h2>Daily Rundown</h2>
                    <ul>
                        {this.state.news.status === "ok" ?
                        this.state.news.articles.map(article => {
                            return (
                                <>
                                <a href={article.url}><h3>{article.title}</h3>
                                </a>
                                <img src={article.urlToImage} className="newsImage" alt="business article" />
                                <li>{article.description}</li>
                                </>
                            )
                        })
                        : <p>No Articles Found</p>}
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