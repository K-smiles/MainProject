import React, { useState } from 'react';
import { Table, Tag } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Number',
        key: 'Number',
        dataIndex: 'Number',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Sector',
        key: 'Sector',
        dataIndex: 'Sector',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Local Hospital Network (LHN)',
        key: 'Local Hospital Network (LHN)',
        dataIndex: 'Local Hospital Network (LHN)',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Distance(km)',
        key: 'Distance',
        dataIndex: 'Distance',
        render: (text) => <div>{text}</div>,
    },
];




function ClosestHosTable(props) {
    const [data, setData] = useState([])
    let baseURL = "https://backdiagui-affe16e7071c.herokuapp.com/closest/"+props.lat+"/"+props.lon;
    console.log(baseURL)
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data[0])
            setData(response.data)
        }, []);
    }, [])

    return (
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
        </>
    );

}

export default ClosestHosTable;