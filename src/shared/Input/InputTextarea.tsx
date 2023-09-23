import { Form, Input } from 'antd'

const InputTextarea = ({ className = "",rows=5, name = "", label = "", placeholder = "", rules = [], required = false, ...arg }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      htmlFor={name}
      // rules={rules}
      rules={[
        {
          required: required
        }
      ]}
    >
      <Input.TextArea className={className + " req-input"}
        placeholder={placeholder}
        id={name}
        rows={rows}
        {...arg}
      />
    </Form.Item>
  )
}

export default InputTextarea