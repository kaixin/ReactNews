import React from 'react'
import { Row, Col, BackTop } from 'antd'
import axios from 'axios'

import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'

import PCNewsImageBlock from './PCNewsImageBlock'


class MobileNewsDetails extends React.Component {
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
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={24}>
                        <span dangerouslySetInnerHTML={this.generateMarkup()}></span>
                    </Col>
                </Row>
                <MobileFooter></MobileFooter>
                <BackTop/>
            </div>
        )
    }
}

export default MobileNewsDetails;