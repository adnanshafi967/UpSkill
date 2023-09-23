import { Col, Row } from "antd"
import InputDate from "../shared/Input/InputDate"
import InputGroup from "../shared/Input/InputGroup"

const ExecutionOfAgreement = () => {
    return (
        <>
            <Row gutter={[24, 16]}>
                <Col md={12}>
                    <InputGroup name="director_sign" placeholder="Director of Construction and Sustainability" label="Name of Director of Construction and Sustainability"   />
                </Col>
                <Col md={12}>
                    <InputDate name="director_date" label="Signature Date of Director of Construction and Sustainability" />
                </Col>
                <Col md={12}>
                    <InputGroup name="finance_sign" placeholder="Chief Finance Officer" label="Name of Chief Finance Officer" />
                </Col>
                <Col md={12}>
                    <InputDate name="finance_date" label="Signature Date of Chief Finance Officer" />
                </Col>
                {/*<Col md={12}>*/}
                {/*    <InputGroup name="by" placeholder="By" label="By" />*/}
                {/*</Col>*/}
                {/*<Col md={12}>*/}
                {/*    <InputGroup name="name" placeholder="Name/Title:" label="Name/Title:" />*/}
                {/*</Col>*/}
                {/*<Col md={12}>*/}
                {/*    <InputGroup name="certify_person" placeholder="Certify Person:" label="Certify Person:" />*/}
                {/*</Col>*/}

                {/*<Col md={12}>*/}
                {/*    <InputGroup name="position" placeholder="Position" label="Position" />*/}
                {/*</Col>*/}

                <Col md={12}>
                    <InputGroup name="company_name" placeholder="Consultant/Company" label="Consultant/Company Name" />
                </Col>

                {/*<Col md={12}>*/}
                {/*    <InputGroup name="incorporation" placeholder="Incorporation" label="Incorporation" />*/}
                {/*</Col>*/}

                {/*<Col md={12}>*/}
                {/*    <InputGroup name="name_by" placeholder="Name By" label="Name By" />*/}
                {/*</Col>*/}

                {/*<Col md={12}>*/}
                {/*    <InputGroup name="attested_by" placeholder="Attested By" label="Attested By" />*/}
                {/*</Col>*/}
                <Col md={12}>
                    <InputDate name="seal_date" label="Seal Date" />
                </Col>

                {/*<Col md={12}>*/}
                {/*    <InputGroup name="notary_seal" placeholder="Notary Seal" label="Notary Seal" />*/}
                {/*</Col>*/}

                {/*<Col md={12}>*/}
                {/*    <InputGroup name="commission" placeholder="Commission" label="Commission" />*/}
                {/*</Col>*/}
            </Row>
        </>
    )
}

export default ExecutionOfAgreement