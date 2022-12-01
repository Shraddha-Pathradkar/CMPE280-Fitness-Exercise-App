import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        localStorage.setItem("userDetails", JSON.stringify(values))

        navigate("/")
    };
    return (
        <div>
            <Typography color="#FF2625" fontWeight="600" fontSize="26px" style={{ marginLeft: "550px", marginTop: "150px" }}>Welcome to Golds Gym!!</Typography>
            <Form
                style={{ maxWidth: "300px", marginLeft: "550px", marginTop: "50px" }}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a style={{ color: "red" }} className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: "red", marginRight: "10px" }}>
                        Log in
                    </Button>
                    Or <a style={{ color: "red" }} href="">register now!</a>
                </Form.Item>
            </Form>
        </div>

    );
};
export default LoginPage;