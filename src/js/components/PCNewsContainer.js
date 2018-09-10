import React from 'react'
import { Row, Col, Carousel, Tabs } from 'antd'
import PCNewsBlock from './PCNewsBlock'
import PCNewsImageBlock from './PCNewsImageBlock'

import Carousel1 from '../../images/carousel_1.jpg'
import Carousel2 from '../../images/carousel_2.jpg'
import Carousel3 from '../../images/carousel_3.jpg'
import Carousel4 from '../../images/carousel_4.jpg'

const TabPane = Tabs.TabPane;

class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            autoplay: true,
            dots: true
        }

        return (
            <div>
                <Row>
                    <Col span="2"></Col>
                    <Col span="20" className="container">
                        <div className="container-left">
                            <Carousel {...settings}>
                                <img src={Carousel1} alt="carousel-1" />
                                <img src={Carousel2} alt="carousel-2" />
                                <img src={Carousel3} alt="carousel-3" />
                                <img src={Carousel4} alt="carousel-4" />
                            </Carousel>
                            <PCNewsImageBlock title='国际' type="guoji" count={6} imgWidth="110px"/>
                        </div>
                        <Tabs className="tabs-news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock type="top" count="20" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock type="guoji" count="20" />
                            </TabPane>
                        </Tabs>
                        <PCNewsImageBlock title="国内" type="guonei" count={8} imgWidth="150px"/>
                        <PCNewsImageBlock title='娱乐' type="yule" count={16} imgWidth="150px"/>
                    </Col>
                    <Col span="2"></Col>
                </Row>
            </div>
        )
    }
}

export default PCNewsContainer;