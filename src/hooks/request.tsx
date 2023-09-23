import axios from "axios";
import { useEffect, useState } from "react";
import config from "../utils/config";
import { Notification } from "./notification";

export const useGetData = ((value: string) => {

    const [items, setItems] = useState([])
    const getItems = () => {
        axios.get(config.apiserver + value)
            .then(function (res) {
                setItems(res.data.data)
            })
            .catch(function (error) {
                console.log(error);

            })
    }

    useEffect(() => {
        getItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return items;
})

/**
 * 
 * @param values {Object} - Form Data
 * @param path {String} - Request Path
 * 
 */

export const NewRequest = ((values: any, path: string,) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiserver + path, values)
            .then(function (res: any) {
                Notification("success", "Success", 'Your request has been sent successfully!');
                const id = res?.data.id;
                resolve(id)

            })
            .catch(function (error: any) {
                Notification("error", "Error", 'Something is wrong!');
                reject(error)
            });
    })
})

/**
 * 
 * @param values {Object} - Form Data
 * @param path {String} - Request url
 * @param token {String} - Auth Token
 * 
 */

export const UpdateRequest = ((values: any, path: string, ) => {
    return new Promise((resolve, reject) => {
        axios.patch(config.apiserver + path, values, )
            .then(function (res: any) {
                Notification("success", "Success", res.data.msg);
                resolve(res)
            })
            .catch(function (error: any) {
                Notification("error", "Error", 'Something is wrong!');
                reject(error)
            });
    })
})
