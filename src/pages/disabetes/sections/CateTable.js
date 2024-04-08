import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Category of Symptoms',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
        
    },
    {
        title: 'Specific Symptoms',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'Common Symptoms',
        tags: ['Frequent urination', 'constant thirst'],
    },
    {
        key: '2',
        name: 'Symptoms of High Blood Sugar',
        tags: ['Blurred vision', 'fatigue', 'chronic wounds or infections'],
    },
    {
        key: '3',
        name: 'Symptoms of Insufficient Insulin',
        tags: ['Weight loss', 'muscle weakness'],
    },
    {
        key: '4',
        name: 'Symptoms of Hyperglycemic Emergencies',
        tags: ['Difficulty breathing', 'abdominal pain', 'vomiting', 'dry skin'],
    },
    {
        key: '5',
        name: 'Long-Term Complications',
        tags: ['Increased risk of heart disease', 'kidney damage', 'retinal disorders'],
    },
];
const columnsDiabetes = [
    {
        title: 'Aspect',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Explanation',
        key: 'tags',
        dataIndex: 'tags',
    },
];
const typeOneDiabetesData = [
    {
        key: '1',
        name: 'What It Is',
        tags: 'The body’s immune system attacks cells that make insulin.',
    },
    {
        key: '2',
        name: 'When It Occurs',
        tags: 'Often starts when one is young but can occur at any age.',
    },
    {
        key: '3',
        name: 'Treatment',
        tags: 'Requires taking insulin every day to manage.',
    },
];


const typeTwoDiabetesData = [
    {
        key: '1',
        name: 'What It Is',
        tags: "The body doesn’t use insulin well and can't keep blood sugar at normal levels.",
    },
    {
        key: '2',
        name: 'When It Occurs',
        tags: 'It’s more common in adults but can happen at any age.',
    },
    {
        key: '3',
        name: 'Treatment',
        tags: 'Often managed with lifestyle changes and medication or insulin as needed.',
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
        <h2>Type 1 Diabetes</h2>
        <Table 
            pagination={false} 
            columns={columnsDiabetes} 
            dataSource={typeOneDiabetesData}
            className="custom-table" 
        />
        <h2>Type 2 Diabetes</h2>
        <Table 
            pagination={false} 
            columns={columnsDiabetes} 
            dataSource={typeTwoDiabetesData}
            className="custom-table" 
        />
    </>
);

export default CateTable;