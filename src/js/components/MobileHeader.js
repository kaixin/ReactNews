import React from 'react'
import { Icon, Modal, Button, Form, Input, Tabs } from 'antd'
import logo from '../../images/logo.png'
import axios from 'axios'
import { Link } from 'react-router'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class MobileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'top',
            loginModalVisible: false,
            isUserLogin: false,
            userName: "",
            userId: 1
        }

        this.closeLoginModal = this.closeLoginModal.bind(this);
        this.cancelLoginModal = this.cancelLoginModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showLoginModal = this.showLoginModal.bind(this);
    }


    showLoginModal() {
        this.setState({
            loginModalVisible: true
        });
    }

    closeLoginModal() {
        this.setState({
            loginModalVisible: false
        });
    }

    cancelLoginModal() {
        this.setState({
            loginModalVisible: false
        });
    }

    handleSubmit(e) {
        var self = this;
        e.preventDefault();
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=register"
            + "&username=username&password=password"
            + "&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmedPassword)
            .then(function (response) {
                self.setState({
                    userName: formData.r_userName,
                    userId: 1,
                    loginModalVisible: false,
                    isUserLogin: true
                });
            })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const isUserLogin = this.state.isUserLogin;
        const loginMenu = isUserLogin ?
            <Link target="_blank">
                <Icon type="inbox" />
            </Link>
            :
            <Icon type="setting" onClick={this.showLoginModal} />

        return (
            <div id="mobile">
                <header>
                    <img src={logo} alt="logo" />
                    <span>React News</span>
                    {loginMenu}
                </header>

                <Modal
                    title="注册登录"
                    visible={this.state.loginModalVisible}
                    onOk={this.closeLoginModal}
                    onCancel={this.cancelLoginModal}
                >
                    <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem label="账号">
                                    {getFieldDecorator('r_userName')(
                                        <Input placeholder="请输入您的账号" />
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password')(
                                        <Input placeholder="请输入您的密码" />
                                    )}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword')(
                                        <Input placeholder="请确认您的密码" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Button type='primary' htmlType="submit">注册</Button>
                                </FormItem>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(MobileHeader);