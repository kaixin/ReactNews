import React from 'react';

import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
import { Row, Col, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class PCUserCenter extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="评论列表" key="1"></TabPane>
                            <TabPane tab="收藏列表" key="2"></TabPane>
                            <TabPane tab="头像设置" key="3"></TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}

export default PCUserCenter;