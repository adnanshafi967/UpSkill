import { Form, Input } from 'antd'
import React from 'react'
import {MaskedInput} from 'antd-mask-input'

const InputMaskNumber = ({ mask = "",name = "", label = "", value = "", placeholder = "", rules = [], className = "", required = false, ...arg }) => {

    return (
        <>
            <Form.Item
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
                <MaskedInput
                    autoComplete="off"
                    mask={mask}
                    placeholder={placeholder}
                    id={name}
                    className={className + " req-input"}
                    {...arg}
                />
            </Form.Item>
        </>
    )
}

export default InputMaskNumber