import {Button, Col, Form, Row} from 'antd'
import background from '../images/home.png'


import React from "react";
import InputGroup from "../shared/Input/InputGroup";
import {useNavigate} from "react-router-dom";
import FormTitle from "../shared/Title/FormTitle";
import axios from "axios";
import config from "../utils/config";
import {Notification} from "../hooks/notification";


const LoginWithToken = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        axios.post(config.apiserver +'verifytoken/1', values)
            .then(function (res: any) {
                if(res.data.status==200){
                    Notification("success", "Success", 'Verification Successful!');
                    localStorage.setItem("token",values['token'])
                    navigate("/")
                    window.location.reload();
                }
                else{
                    Notification("error", "Error", 'Invalid Token!');
                }
            })
            .catch(function (error: any) {
                Notification("error", "Error", 'Something is wrong!');

            });

    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
                <div style={{ backgroundImage: `url(${background})`,backgroundSize: "cover" }} className="projects">
                    <h1 className={`font-bold text-primary text-5xl mb-16 text-center`}>The Portal</h1>
                    <FormTitle title="Login with Token" className="text-center" />
                    <Form
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical"
                            autoComplete="off"
                            form={form}
                        >
                        <Row gutter={[24, 16]} className={"justify-center my-5"}>
                           <Col lg={5} md={12} sm={24} xs={24}>
                            <InputGroup label={"Enter your Token/Registered Email:"} required={true} name={"token"}></InputGroup>
                        </Col>
                        </Row>
                        <Row>
                            <Col lg={24} xs={24} style={{ textAlign: "center" }} >
                                <Button type="primary" htmlType="submit" size="large" className="bg-primary border-primary hover:bg-white hover:border-primary hover:!text-primary mx-5 w-fit uppercase !text-white">
                                   Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
        </>
    )
}

export default LoginWithToken;