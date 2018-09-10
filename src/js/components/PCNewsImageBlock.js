import React from 'react'
import { Card } from 'antd'

import { Link } from 'react-router'

import axios from 'axios'

class PCNewsImageBlock extends React.Component {
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
        const imageStyle = {
            width: this.props.imgWidth,
            height: "90px"
        }

        const titleStyle = {
            width: this.props.imgWidth,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }

        const news = this.state.news;
        const newsList = news.length
        ?
        news.map((newsItem, index)=> (
            <div  key={index} style={{display: 'inline-block', paddingRight: '5px', paddingBottom: '10px'}}>
                <Link to={`detail/${newsItem.uniquekey}`} target="_blank">
                    <div>
                        <img alt="" src={newsItem.thumbnail_pic_s}  style={imageStyle}/>
                    </div>
                    <div style={titleStyle}>
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.author_name}</p>
                    </div>
                </Link>
            </div>
        ))
        :   
        "没有该类型的新闻数据";

        return (
            <div className="topNewsList">
                <Card title={this.props.title}>
                    {newsList}
                </Card>
            </div>
        )
    }
}

export default PCNewsImageBlock;