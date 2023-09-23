import { Form, Input } from 'antd'
import React from 'react'

const InputGroup = ({ name = "", label = "", value = "", placeholder = "", rules = [], className = "", required = false,  inputType = '', min = 0, ...arg }) => {

    return (
        <>
            <Form.Item
                label={label}
                name={name}
                htmlFor={name}
                initialValue={value}
                rules={[
                    {
                        required: required,
                        // type: inputType
                    }
                ]}
            >
                <Input
                    placeholder={placeholder}
                    id={name}
                    // className={className + " req-input"}
                    className={className + ""}
                    type={inputType}
                    min={min}
                    
                    step="any"
                    
                    {...arg}
                />
            </Form.Item>
        </>
    )
}

export default InputGroup