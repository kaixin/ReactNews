import React from 'react'
import MobileHeader from './components/MobileHeader'
import MobileFooter from './components/MobileFooter'
import { Tabs, Carousel } from 'antd'
import MobileNewsList from './components/MobileNewsList'


import Carousel1 from '../images/carousel_1.jpg'
import Carousel2 from '../images/carousel_2.jpg'
import Carousel3 from '../images/carousel_3.jpg'
import Carousel4 from '../images/carousel_4.jpg'

const TabPane = Tabs.TabPane;


class MobileIndex extends React.Component {
    render() {
        const settings = {
            autoplay: true,
            dots: true
        }
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <Carousel {...settings}>
                            <img src={Carousel1} alt="carousel-1" />
                            <img src={Carousel2} alt="carousel-2" />
                            <img src={Carousel3} alt="carousel-3" />
                            <img src={Carousel4} alt="carousel-4" />
                        </Carousel>
                        <MobileNewsList count={20} type="top" />
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileNewsList count={20} type="shehui" />
                    </TabPane>
                    <TabPane tab="国际" key="3">
                        <MobileNewsList count={20} type="guoji" />
                    </TabPane>
                    <TabPane tab="国内" key="4">
                        <MobileNewsList count={20} type="guonei" />
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        `    <MobileNewsList count={20} type="yule" />
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}

export default MobileIndex;