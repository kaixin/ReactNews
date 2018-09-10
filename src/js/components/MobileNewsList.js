import React from 'react'
import { Row, Col } from 'antd'

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
            <section key={index} className="m_article list_item special_section clearfix">
                <Link to={`/details/${newsItem.uniquekey}`}>
                    <div className="m_article_img">
                        <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
                    </div>
                    <div className="m_article_info">
                        <div className="m_article_title">
                            <span>{newsItem.title}</span>
                        </div>
                        <div className="m_article_desc">
                            <div className="m_article_desc_l">
                                <span className="m_article_channel">{newsItem.realtype}</span>
                                <span className="m_article_time">{newsItem.date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        ))
        :   
        "没有该类型的新闻数据";

        return (
            <div>
                <Row>
                    <Col>
                        {newsList}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PCNewsBlock;