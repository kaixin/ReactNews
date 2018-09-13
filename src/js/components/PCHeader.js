import React from 'react'
import { Row, Col, Menu, Icon, Modal, Button, Form, Input, Tabs } from 'antd'
import logo from '../../images/logo.png'
import axios from 'axios'
import { Link } from 'react-router'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


class PCHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'top',
            loginModalVisible: false,
            isUserLogin: false,
            userName: "",
            userId: 1,
            action: 'login'
        }

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
        this.cancelLoginModal = this.cancelLoginModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showLoginModal = this.showLoginModal.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleTabClick(tab) {
        var action;
        switch(tab) {
            case "1":
                action = 'login';
                break;
            case "2":
                action = 'resgister';
                break;
            default:
                console.error("clicking wrong tab!");
        }

        console.log(action)

        if(this.state.action !== action) {
            this.setState({
                action: action
            });
        }
        console.log(this.state.action);
    }

    handleMenuClick(e) {
        this.setState({
            current: e.key
        });
        if (e.key === "register") {
            this.showLoginModal();
        }
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
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username=" + formData.userName + "&password=" + formData.password
            +"&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmedPassword)
            .then(function (response) {
                self.setState({
                    userName: formData.r_userName || formData.userName,
                    userId: 1,
                    loginModalVisible: false,
                    isUserLogin: true
                });
            })
    }

    handleLogout() {
        this.setState({
            isUserLogin: false
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const isUserLogin = this.state.isUserLogin;
        const loginMenu = isUserLogin ?
            <Menu.Item key="logout">
                <div>
                    <Button type='primary' htmlType='button'>{this.state.userName}</Button>
                    &nbsp;&nbsp;
                    <Link to="/usercenter">
                        <Button type='dashed' htmlType='button'>个人中心</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button type='ghost' onClick={this.handleLogout}>退出</Button>
                </div>
            </Menu.Item>
            :
            <Menu.Item key="register">
                <Icon type='appstore' />
                <Button type='primary' htmlType='button'>注册/登陆</Button>
            </Menu.Item>
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" />
                            <span>React News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            onClick={this.handleMenuClick}
                        >
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                            {loginMenu}
                        </Menu>

                        <Modal
                            title="注册登录"
                            visible={this.state.loginModalVisible}
                            onOk={this.closeLoginModal}
                            onCancel={this.cancelLoginModal}
                        >
                            <Tabs type="card" onTabClick={this.handleTabClick}>
                                <TabPane tab="登陆" key="1">
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormItem label="账号">
                                            {getFieldDecorator('userName')(
                                                <Input placeholder="请输入您的账号" />
                                            )}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('password')(
                                                <Input placeholder="请输入您的密码" />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <Button type='primary' htmlType="submit">登陆</Button>
                                        </FormItem>
                                    </Form>
                                </TabPane>
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
                                            {getFieldDecorator('r_confirmedPassword')(
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
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Menu></Menu>
            </header>
        )
    }
}

export default Form.create()(PCHeader);