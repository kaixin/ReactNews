import React from 'react'
import { Row, Col, Card, Form, Button, Input } from 'antd'
import axios from 'axios'

const FormItem = Form.Item;
const { TextArea } = Input;

class CommonComment extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey).then(resp => {
            console.log(resp.data);    
        this.setState({
                comments: resp.data
            });
        });
    }

    handleSubmit(e) {
        var self = this;
        e.preventDefault();
        var formData = this.props.form.getFieldsValue();
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=111" + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.userComment).then(resp => {
            self.componentWillMount();
        });
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        let {comments} = this.state;
        let commentsList = comments.length ?
            comments.map((comment, index) => (
                <Card key={index} title={comment.UserName} 
                    extra={<a href="#">发布于{comment.datetime}</a>}    
                >
                    <p>{comment.Comments}</p>
                </Card>
            ))
        :
        "没有加载到评论";

        return (
            <div>
                <Row>
                    <Col span={24}>
                        {commentsList}
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem label="评论">
                                {getFieldDecorator('userComment')(
                                    <Input type="textarea" placeholder="请输入评论" />
                                )}
                            </FormItem>
                            <FormItem label="提交">
                                <Button type="primary" htmlType="submit">提交</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Form.create()(CommonComment);