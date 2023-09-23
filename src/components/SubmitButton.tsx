import { Button, Checkbox, Col, Form } from 'antd'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../utils/config";

import ReCAPTCHA from "react-google-recaptcha";


const SubmitButton = ({ id = 0, exportPdf = false, pdfUrl = '' ,defaultPdf=false, loader = false}) => {

    let buttonDisable=true;
    // const [form] = Form.useForm();
    const navigate = useNavigate();
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    let button_label = "Submit"
    if (id > 0) {
        button_label = "Update"
        buttonDisable=false
    }
    if(localStorage.getItem("token")){
        buttonDisable=false
    }
    const enterLoading = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
    // function onChange(value: any) {
    //     console.log("Captcha value:", value);
    //     setReCaptcha(!reCaptcha)
    // }

    return (
        <>
            {/*<Col sm={24}>*/}

                {/*<ReCAPTCHA*/}
                {/*    sitekey="6LcYrgoeAAAAALhdWsL9zj19peuJ61rtK1xCn-K6"*/}
                {/*    onChange={onChange}*/}
                {/*    className="mt-5"*/}
                {/*/>*/}


                {/*<Form.Item name="recapture" valuePropName="checked" rules={[{ required: reCaptcha, message: "Recapture is required" }]} className="max-h-1">*/}
                {/*    <Checkbox className='hidden min-h-0' />*/}
                {/*</Form.Item>*/}


            {/*</Col>*/}
            <Col lg={24} xs={24} style={{ textAlign: "center" }} className="my-20">

                {/* <Link to="/" > */}
                <Button type="default" onClick={() => navigate(-1)} size="large" className="bg-white border-primary hover:border-primary hover:text-primary mx-5 w-28 uppercase">
                    Cancel
                </Button>
                {/* </Link> */}
                {!exportPdf ?
                    <Button type="default" htmlType="reset" size="large" className="bg-white border-primary hover:border-primary hover:text-primary mx-5 w-28 uppercase" onClick={() => setTotal(0)}
                    >
                        Reset
                    </Button> : ""
                }
                {!exportPdf ?

                    <Button type="primary" htmlType="submit" size="large" className="bg-primary border-primary hover:bg-white hover:border-primary hover:!text-primary mx-5 w-fit uppercase !text-white"
                            disabled={buttonDisable} loading={loading} onClick={enterLoading}
                    >
                        {button_label}
                    </Button>

                    :
                    defaultPdf?
                        <>
                            <a href={config.baseurl + `${pdfUrl}`} target="_blank" rel="noreferrer">
                                <Button type="primary" size="large" className="bg-primary border-primary hover:bg-white hover:border-primary hover:!text-primary mx-5 w-fit uppercase  !text-white">
                                    Download PDF
                                </Button>
                            </a>
                            <Button type="primary" htmlType="submit" size="large" className="bg-primary border-primary hover:bg-white hover:border-primary hover:!text-primary mx-5 w-fit uppercase !text-white"
                            disabled={buttonDisable} loading={loading} onClick={enterLoading}
                            >
                            Update
                            </Button>
                        </>
                        :(
                            <>
                                <a href={config.apiserver + `${pdfUrl}/${id}`} target="_blank" rel="noreferrer">
                                    <Button type="primary" size="large" className="bg-primary border-primary hover:bg-white hover:border-primary hover:!text-primary mx-5 w-fit uppercase  !text-white">
                                        Download PDF
                                    </Button>
                                </a>
                                <Button type="primary" htmlType="submit" size="large" className="bg-primary border-primary hover:bg-white hover:border-primary hover:!text-primary mx-5 w-fit uppercase !text-white"
                                    disabled={buttonDisable} loading={loading} onClick={enterLoading}
                                >
                                    Update
                                </Button>
                            </>
                        )
                }

            </Col>

        </>
    )
}

export default SubmitButton