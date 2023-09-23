import { Checkbox, Form } from 'antd'
import React, {useEffect, useState} from "react";
import {RuleObject} from "rc-field-form/lib/interface";

const InputCheckbox = ({ name = "", label = "", required = false, className="",required_msg='' , id='',disable=false,...arg}) => {
    const [checked, setChecked] = useState(false);
    const [form] = Form.useForm();
    const check = () => {
        if (id!== undefined){
            setChecked(true)
        }
    }
    useEffect(() => {
       check()
    }, [])

    const onCheckboxChange = async (e: any) => {
        await setChecked(e.target.checked);
        await form.validateFields(['checkbox']);
        // console.log(checked)
    };

    const validation = (rule: RuleObject, value: any, callback: (error?: string) => void) => {
        if(checked) {
            return callback()
        }
        return callback(required_msg)
    };

    return (
        <>
            {required?
                <Form.Item
                    name={name}
                    htmlFor={name}
                    valuePropName="checked"
                    className={className}
                    // rules={[
                    //     {
                    //         validator: validation
                    //     }
                    // ]}
                >
                        {/*<sup style={{ color: "red",marginRight:"5px"}}>*</sup>*/}
                        <Checkbox  checked={checked} onChange={onCheckboxChange} >

                            <sup style={{ color: "red",marginRight:"5px"}}>*</sup>{label}
                        </Checkbox>
                </Form.Item>
                :
                <Form.Item
                    name={name}
                    htmlFor={name}
                    valuePropName="checked"
                    className={className}
                >
                        <Checkbox disabled={disable} {...arg}>
                            {label}
                        </Checkbox>
                </Form.Item>
            }
        </>
    )
}

export default InputCheckbox