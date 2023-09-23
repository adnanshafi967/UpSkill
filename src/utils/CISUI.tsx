import { Tag } from "antd";

const CisUI = () => {
    const getStatusLabel = (status: any) => {

        let statusLB: any = { status };
        if (status === 1) {
            statusLB = <Tag color="#34495e" className="list-tag-name">Active</Tag>
        }
        else if (status === 0) {
            statusLB = <Tag color="#750707" className="list-tag-name">Inactive</Tag>
        }
        else {
            statusLB = <Tag color="#750707" className="list-tag-name">{status}</Tag>
        }
        return statusLB;
    };


    // Create our number formatter.
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return {
        getStatusLabel,
        currencyFormatter,
    }
}



export { CisUI }
