import React from 'react';

import PCHeader from './PCHeader';
import PCFooter from './PCFooter';
import { Row, Col, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class PCUserCenter extends React.Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="评论列表" key="1"></TabPane>
                            <TabPane tab="收藏列表" key="2"></TabPane>
                            <TabPane tab="头像设置" key="3"></TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        )
    }
}

export default PCUserCenter;