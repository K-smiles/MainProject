import React from 'react';
import { Table } from 'antd';
import { Typography } from '@mui/material';

const columns = [
    {
        title: '  ',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Exercise Type',
        key: 'type',
        dataIndex: 'type',
        render: (text) => <a>{text}</a>,
    }
];

const optionData = [
    { value: 1, name: "Walking leisurely", met: 4.0 },
    { value: 2, name: "Walking for exercise", met: 6.0 },
    { value: 3, name: "Resistance (weight) training", met: 4.3 },
    { value: 4, name: "Swimming freestyle", met: 5.8 },
    { value: 5, name: "Golf", met: 4.3 },
    { value: 6, name: "Bicycling (moderate effort)", met: 5.3 },
    { value: 7, name: "Video Game", met: 5.5 },

    { value: 8, name: "Bicycling vigorous effort", met: 6.3 },
    { value: 9, name: "Swimming butterfly", met: 11.0 },
    { value: 10, name: "Dance class", met: 6.3 },
    { value: 11, name: "Running (10 min/km)", met: 8.5 },
    { value: 12, name: "Running (5.3 min/km)", met: 15.5 },
];

function ExerciseTable({ frequency }) {
    let fre = frequency
    //generate data
    const generateData = () => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let result = [];
        days.forEach(day => {
            let numExercises = Math.floor(Math.random() * fre) + 1;
            if (numExercises > fre / 7) {
                numExercises = Math.floor(fre / 7) + 1;
            }
            if (day == 'Sunday')
                numExercises = fre
            else {
                fre = fre - numExercises
            }
            let tmpData = {}
            let selectedExercises = [];

            // Randomly select exercises for the day
            for (let i = 0; i < numExercises; i++) {
                const exercise = optionData[Math.floor(Math.random() * optionData.length)];
                selectedExercises.push({ name: exercise.name, time: Math.floor(Math.random() * 60) });
            }

            // Add the selected exercises to the result
            tmpData['name'] = day
            tmpData['key'] = day

            tmpData['type'] = selectedExercises.map((item) => {
                return <Typography>
                    Exercise Type:{item.name}  Duration:{item.time} min
                </Typography>
            })
            result.push(tmpData)
        });

        return result;
    }

    const result = generateData()
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
                dataSource={result}
                className="custom-table"
            />
        </>
    );

}

export default ExerciseTable;