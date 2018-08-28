import React from 'react'
import { Row, Col, Menu } from 'antd'


class PCFooter extends React.Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <div className="footer">
                            &copy;&nbsp;2018 ReactNews. All rights reserved.
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Menu></Menu>
            </footer>
        )
    }
}

export default PCFooter;