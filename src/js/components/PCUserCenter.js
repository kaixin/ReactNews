import React from 'react';

import PCHeader from './PCHeader';
import PCFooter from './PCFooter';
import { Row, Col, Tabs, Upload, Modal, Icon } from 'antd';

const TabPane = Tabs.TabPane;

class PCUserCenter extends React.Component {
    constructor() {
        super();
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }]
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
    }

    handleCancel() {
        this.setState({
            previewVisible: false
        });
    }

    handlePreview(file) {
        this.setState({
            previewImage: file.url,
            previewVisible: true
        })
    }

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
                            <TabPane tab="头像设置" key="3">
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={this.state.fileList}
                                    onPreview={this.handlePreview}
                                >
                                    <Icon type="plus"></Icon>
                                    <div className="ant-upload-text">Upload</div>
                                </Upload>

                                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                                    <img alt="预览" style={{width: '100%'}} src={this.state.previewImage}></img>
                                </Modal>
                            </TabPane>
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