import React from 'react'
import { Row, Col, BackTop } from 'antd'
import axios from 'axios'

import PCHeader from './PCHeader'
import PCFooter from './PCFooter'

import PCNewsImageBlock from './PCNewsImageBlock'


class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
        this.generateMarkup = this.generateMarkup.bind(this);
    }

    componentDidMount() {
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey).then(resp => {
            this.setState({
                newsItem: resp.data
            });
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
       
    }

    generateMarkup() {
        return {
            __html: this.state.newsItem.pagecontent
        }
    }
   

    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <span dangerouslySetInnerHTML={this.generateMarkup()}></span>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={40} type="top" imgWidth="150px" title="相关新闻" />
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
                <BackTop/>
            </div>
        )
    }
}

export default PCNewsDetails;