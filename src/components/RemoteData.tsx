import React, {useState, useEffect} from "react";
import axios from "axios";
import Config from "../utils/config";


const RemoteData = (endpoint="",token="") => {

    const [data, setData] = useState({});


    const getData = async () => {
        axios.defaults.headers.common['Authorization'] = token;

        return await axios.get(Config.apiserver+endpoint)
            .then((res) => {
                //console.log(res.data);
                if(res.data.status === 1) {
                    if(res.data) {
                        setData(res.data.data);
                    }
                    else {
                        setData(res.data)
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                setData([]);
            });
    };
    useEffect(() => {
        getData()
    }, []);
    return data;

}

export default RemoteData;
