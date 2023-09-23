import { Form, Select } from 'antd';
import React from 'react';

// eslint-disable-next-line no-lone-blocks
{/* .charAt(0).toUpperCase() + name.slice(1) */ }

const InputSelect = ({ name = "", label = "", placeholder = "", rules = [], items = [], required = false }) => {
    return (
        <Form.Item
            label={label}
            // rules={rules}
            name={name}
            rules={[
                {
                    required: required
                }
            ]}
        >
            <Select
                // showSearch
                placeholder={placeholder}
                style={{ width: "100%" }}
                filterOption={(input, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                className="input__selection"

            >
                {items.map((item: any, index) => (
                    <Select.Option key={++index} value={item.id}>
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
}

export default InputSelect