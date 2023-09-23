import { DatePicker, Form } from 'antd'
import React from 'react'

const InputDate = ({ format="MM/DD/YYYY", className = "",showTime=false, name = "", label = "", rules = [], required = false,required_msg='',...arg  }) => {
  return (
    <>
      <Form.Item
        label={label}
        name={name}
        htmlFor={name}
        initialValue={""}
        rules={[{ required: required,message: required_msg}]}

      >
        <DatePicker format={format} placeholder="Select Date"  className={className + " req-input"} {...arg} />
      </Form.Item>
    </>
  )
}

export default InputDate