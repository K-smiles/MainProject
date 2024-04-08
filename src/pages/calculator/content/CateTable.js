import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Risk Level',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Score Range',
        key: 'sco',
        dataIndex: 'sco',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Risk Description',
        key: 'des',
        dataIndex: 'des',
        render: (text) => <div>{text}</div>,
    },
];

const data = [
    {
        key: '1',
        name: 'Low Risk',
        sco: '5 or less',
        des: "You're currently at a low risk of developing type 2 diabetes within the next 5 years. (1 in 100)",
    },
    {
        key: '2',
        name: 'Intermediate Risk (Lower)',
        sco: '6 – 8',
        des: "Your risk is intermediate. Lifestyle changes may help reduce this risk further.(1 in 50)",
    },
    {
        key: '3',
        name: 'Intermediate Risk (Higher)',
        sco: '	9–11	',
        des: "You're at an elevated intermediate risk. Consider lifestyle adjustments and discuss with a healthcare provider.(1 in 30)",
    },
    {
        key: '4',
        name: 'High Risk (Moderate)',
        sco: '12–15	',
        des: "Your risk is high. It's advisable to consult a doctor for a detailed health plan to mitigate risks. (1 in 14).",
    },
    {
        key: '5',
        name: 'High Risk (Severe)	',
        sco: '16 and above	',
        des: "You're at a very high risk or might already have undiagnosed diabetes. Immediate medical consultation is recommended.(1 in 7 to 1 in 3).",
    },
];

const CateTable = () => (
    <>

        <style>
            {`
                .custom-table .ant-table-cell {
                    font-size: 25px; 
                }
            `}
        </style>
        <Table
            pagination={false}
            columns={columns}
            dataSource={data}
            className="custom-table"
        />
        <h2>
            The parentheses indicate the probability of developing diabetes for every 100 people—1 in 100 is a low chance, while higher scores show increased risk, with 1 in 7 to 1 in 3 being a very high chance.
        </h2>
    </>
);

export default CateTable;