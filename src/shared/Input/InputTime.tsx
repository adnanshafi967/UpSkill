import {Form, TimePicker} from 'antd'
import React from 'react'

const InputTime = ({  className = "",showTime=false, name = "", label = "", rules = [], required = false,required_msg='',...arg  }) => {
  return (
    <>
      <Form.Item
        label={label}
        name={name}
        htmlFor={name}
        initialValue={""}
        rules={[{ required: required,message: required_msg}]}

      >
        <TimePicker use12Hours format="h:mm a" placeholder="Select Time"  className={className + " req-input"} {...arg} />
      </Form.Item>
    </>
  )
}

export default InputTime