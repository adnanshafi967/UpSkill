/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Select } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../../utils/config';
import Loader from "../../components/Loader";

const SelectReq = ({ name = "", label = "", placeholder = "", rules = [], path = "", showSearch=true, required = true}) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(false)
    const getItems = () => {
        setLoader(true)
        axios.get(config.apiserver + path)
            .then(function (res) {
                setItems(res.data.data)
                setLoader(false)
            })
            .catch(function (error) {
                setLoader(false)
                console.log(error);
            })
    }
    useEffect(() => {
        getItems()
    }, [])
    return (

        loader ? <Loader/> :
        <Form.Item
            label={label}
            // rules={rules}
            name={name}
            rules={[
                {
                    required : required
                }
            ]}
        >
            <Select
                showSearch={showSearch}
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

export default SelectReq