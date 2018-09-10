import React from 'react'
import { Card } from 'antd'

import { Link } from 'react-router'

import axios from 'axios'

class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count)
            .then(resp => {
                this.setState({
                    news: resp.data
                })
            })
    }

    render() {
        const news = this.state.news;
        const newsList = news.length
        ?
        news.map((newsItem, index)=> (
            <li key={index}>
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">{newsItem.title}</Link>
            </li>
        ))
        :   
        "没有该类型的新闻数据";

        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}

export default PCNewsBlock;