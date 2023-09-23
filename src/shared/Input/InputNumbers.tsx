import {Form, InputNumber} from 'antd'
import React from 'react'
import "./input.scss"


const InputNumbers = ({ extra="",name = "", label = "", value = "", placeholder = "", rules = [], className = "", required = false, disable = false, inputType = "", ...arg }) => {

    return (
        <>
            <Form.Item
                extra={extra}
                label={label}
                name={name}
                htmlFor={name}
                initialValue={value}
                rules={[
                    {
                        required: required
                    }
                ]}
            >
                <InputNumber
                    placeholder={placeholder}
                    id={name}
                    // className={className + " req-input"}
                    disabled = {disable}
                    type={inputType}
                    min={0}
                    step="any"
                    {...arg}
                />
            </Form.Item>
        </>
    )
}

export default InputNumbers