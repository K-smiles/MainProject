import React from 'react';
import { Table, Tag } from 'antd';
import MKTypography from "components/MKTypography";
function ScoreTable(props) {

    const columns = [
        {
            title: 'Question',
            dataIndex: 'que',
            key: 'que',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Point',
            key: 'poi',
            dataIndex: 'poi',
            render: (text) => <div>{text}</div>,
        },
    ]

    const data = [
        {
            key: '1',
            que: "Gender",
            poi: props.gender
        },
        {
            key: '2',
            que: "Age",
            poi: props.age
        },
        {
            key: '3',
            que: "Heritage",
            poi: props.isEthnicity
        },
        {
            key: '4',
            que: "Birthplace",
            poi: props.country
        },
        {
            key: '5',
            que: "Family history",
            poi: props.pare
        },       
        {
            key: '6',
            que: "Smoke",
            poi: props.isSmoke
        },

        {
            key: '7',
            que: "Vegal or fruit",
            poi: props.isVe
        },
        {
            key: '8',
            que: "Exervise",
            poi: props.isExercise
        },
 
        {
            key: '9',
            que: "Blood glucose level",
            poi: props.high_blood_glucose
        },
        {
            key: '10',
            que: "Medication",
            poi: props.isMedication
        },
        {
            key: '11',
            que: "Waist",
            poi: props.waist
        },
    ]
    return (<>
        <style>
            {`
                .custom-table .ant-table-cell {
                    font-size: 25px; 
                }
            `}
        </style>
        <MKTypography variant="h1" >The Detail of Score is </MKTypography>
        <Table
            pagination={false}
            columns={columns}
            dataSource={data}
            className="custom-table"
        />

    </>)
};

export default ScoreTable;