import { Col, Divider, Typography } from "antd";
import React from "react";
const { Title } = Typography;

const FormSubTitle = ({ orientation = "left", title = "" }) => {
    return (
        <Col span={24} className="mt-2">
            <Divider orientation="left" >
                <Title level={5}  style={{color:"#113858",fontWeight:"normal"}}>{title}</Title>
            </Divider>
        </Col>
    )
};

export default FormSubTitle;
