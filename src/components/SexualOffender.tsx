import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import React, { Fragment } from "react";
import InputCheckbox from "../shared/Input/InputCheckbox";
import InputGroup from "../shared/Input/InputGroup";
import FormTitle from "../shared/Title/FormTitle";
import InputDate from "../shared/Input/InputDate";



const SexualOffender = ({show=true}) => {

    return (
        <>
            <h1></h1>
            {/*<h1 className={`font-bold text-primary text-lg mt-5`}>Exhibit C</h1>*/}
            <h1 className={`font-bold text-primary text-lg text-center`} style={{marginTop:'60px'}}>Exhibit A </h1>
            <h1 className={`font-bold text-primary text-lg text-center`} style={{marginBottom:'60px'}}>Sexual Offender Registry Check Certification Form</h1>
            {
                show?
                <Row gutter={[24, 16]}>
                    <Col md={12}>
                        <InputGroup label="Project Name" name="project_name" placeholder="Project Name" />
                    </Col>
                    <Col md={12}>
                        <InputGroup label="Contract" name="contract" placeholder="Contract" />
                    </Col>
                </Row>:''
            }
            <Row className="flex flex-col mt-6">
                <p>Check the appropriate box to indicate the type of check:</p>
                <InputCheckbox label="Initial" name="initial" />
                <InputCheckbox label="Supplemental" name="supplemental" />
                <InputCheckbox label="Annual" name="annual" />
            </Row>

            <Row className="mt-5">
                <Col span={24}>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-3">
                            <p>I, </p>
                            <InputGroup name="certification_name" placeholder="Company Representative Name" />,
                            <InputGroup name="certification_title" placeholder="Company Representative Title" />
                            <p>of</p>
                            <InputGroup name="certification_company_name" placeholder="Company Name" />
                        </div>
                    </div>
                    <p className="mt-3">hereby certify that I have conducted sexual offender registry checks required under this Agreement for all employees, agents, ownership personnel, or contractors (“contractual personnel”) who will engage in any service on or delivery of goods to school system property, except for individuals who are solely delivering or picking up equipment, materials, or supplies at: (1) the administrative office or loading dock of a school; (2) non-school sites; (3) schools closed for renovation; or (4) school construction sites., including the North Carolina Sex Offender and Public Protection Registration Program, the North Carolina Sexually Violent Predator Registration Program, and the National Sex Offender Registry. I further certify that I will not assign any individual to deliver goods or perform services under this Agreement if said individual appears on any of the sex offender registries. I agree to maintain all records and documents associated with these registry checks, and that I will provide such records and documents to the school system upon request. I specifically acknowledge that the school system retains the right to audit these records to ensure compliance with this section at any time in the school system’s sole discretion. I acknowledge that I am required to perform these checks and provide this certification form before any work is performed under the Agreement (initial check), any time additional contractual personnel may perform work under the Agreement (supplemental check), and at each anniversary date of the Agreement (annual check).</p>

                </Col>
            </Row>

            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Row>
                        <Col span={11}> <FormTitle title="Contractual Personnel Names" /></Col>
                        <Col span={11}> <FormTitle title="Job Title" className="text-left" /></Col>
                        <Col span={2}></Col>
                    </Row>
                </Col>

                <Form.List name="contractual_personnel">
                    {(fields, { add, remove }) => {
                        return (
                            <>
                                {fields.map((field, index) => (
                                    <Fragment key={field.key}>

                                        <Col lg={11} xs={24}>

                                            <Form.Item name={[index, "name"]} className="form-input">
                                                <Input placeholder="Name" className="req-input" />
                                            </Form.Item>
                                            {/* <InputGroup name={[index, "label"]} /> */}
                                        </Col>
                                        <Col lg={11} xs={24}>
                                            <Form.Item name={[index, "job_title"]} className="form-input">
                                                <Input placeholder="Job Title" className="req-input" />
                                            </Form.Item>
                                        </Col>
                                        {fields.length >= 1 ? (
                                            <Col lg={2} xs={24} className="flex items-center justify-center" >
                                                {/* <Button onClick={() => remove(field.name)} type="link">
                                                                Remove
                                                            </Button> */}
                                                <MinusCircleOutlined style={{ fontSize: "30px" }} onClick={() => remove(field.name)} />
                                            </Col>
                                        ) : null}
                                    </Fragment>
                                ))}
                                <Col lg={24} xs={24}>
                                    <Button onClick={() => add()} type="link">
                                        {fields.length > 0 ? "Add More" : "Add Contractual"}
                                    </Button>
                                </Col>
                            </>
                        );
                    }}
                </Form.List>
            </Row>


            <Row gutter={[24, 16]} className="mt-10">
                <Col span={24}> <p>I attest that the forgoing information is true and accurate to the best of my knowledge.</p></Col>
                <Col md={12}>
                    <InputGroup label="Company Representative Name" name="signature_name" placeholder="Company Representative Name" />
                </Col>
                {/*<Col md={12}>*/}
                {/*    <InputGroup label="Signature" name="signature_sign" placeholder="signature" />*/}
                {/*</Col>*/}
                <Col md={12}>
                    <InputGroup label="Company Representative Title" name="signature_title" placeholder="Company Representative Title" />
                </Col>
                <Col md={12}>
                    <InputDate label="Date" name="signature_date" />
                </Col>
            </Row>


        </>
    )
}

export default SexualOffender