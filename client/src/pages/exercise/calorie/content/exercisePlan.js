import React from 'react';
import { Typography, Grid, Tooltip } from '@mui/material';
import Link from '@mui/material/Link';
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard_new";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard_new";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

//icon
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import WarningIcon from '@mui/icons-material/Warning';

import picture5 from "assets/images/Motivation.jpg";

import { TreeSelect, Select, Table, Button } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const columns = [
    {
        title: '  ',
        dataIndex: 'day',
        key: 'day',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Exercise Info',
        key: 'info',
        dataIndex: 'info',
        render: (text) => <a>{text}</a>,
    }
];
const treeData = [
    {
        title: 'moderate exercise',
        value: 'moderate',
        key: 'moderate',
        children: [
            { value: 1, key: 1, title: "Walking leisurely", met: 4.0 },
            { value: 2, key: 2, title: "Walking for exercise", met: 6.0 },
            { value: 3, key: 3, title: "Resistance (weight) training", met: 4.3 },
            { value: 4, key: 4, title: "Swimming freestyle", met: 5.8 },
            { value: 5, key: 5, title: "Golf", met: 4.3 },
            { value: 6, key: 6, title: "Bicycling (moderate effort)", met: 5.3 },
            { value: 7, key: 7, title: "Video Game", met: 5.5 },
        ],
    },
    {
        title: 'high intensity exercise',
        value: 'intensity',
        key: 'intensity',
        children: [
            { value: 8, key: 8, title: "Bicycling vigorous effort", met: 6.3 },
            { value: 9, key: 9, title: "Swimming butterfly", met: 11.0 },
            { value: 10, key: 10, title: "Dance class", met: 6.3 },
            { value: 11, key: 11, title: "Running (10 min/km)", met: 8.5 },
            { value: 12, key: 12, title: "Running (5.3 min/km)", met: 15.5 },
        ],
    },
];

function ExerciseTable() {
    const [value, setValue] = React.useState();
    const [isVisible, setIsVisible] = React.useState()
    const [days, setDay] = React.useState('');
    const [data, setData] = React.useState([]);

    const onChange = (newValue) => {
        setValue(newValue);
    };

    const tProps = {
        treeData,
        value,
        onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Please select your exercise type',
        style: {
            width: '100%',
        },
    };

    const handleChange = (value) => {
        setDay(value)
    };
    const generatePlan = () => {
        //generate data
        let exerciseType = []

        if (value != undefined) {
            value.forEach(item => {
                if (item == 'moderate') {
                    exerciseType.push(...treeData[0].children)
                } else if (item == 'intensity') {
                    exerciseType.push(...treeData[1].children)
                }
                else {
                    if (item < 8) {
                        exerciseType.push(treeData[0].children[item - 1])
                    } else {
                        exerciseType.push(treeData[1].children[item - 8])
                    }
                }
            })
        }
        if (exerciseType.length >= 3 && days != '') {

            getPlan(days, exerciseType)
            setIsVisible(true)
        }
    }

    const getPlan = (days, types) => {

        let exercise = []
        shuffleArray(types)
        if (days >= types.length) {
            exercise = types
        }
        else {
            exercise = types.slice(0, days);
        }

        let shedule;
        if (days === 3) {
            shedule = ['Monday', 'Wednesday', 'Friday'];
        } else if (days === 4) {
            shedule = ['Monday', 'Tuesday', 'Wednesday', 'Saturday',];
        } else if (days === 5) {
            shedule = ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];
        } else if (days === 6) {
            shedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        } else if (days === 7) {
            shedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        } else {
            // Handle cases where e is not 3, 4, 5, 6, or 7
            shedule = [];
        }

        let results = []
        let tmpArray = Array.from(exercise);
        shedule.forEach(function (day) {
            if (tmpArray.length == 0) {
                tmpArray = Array.from(exercise);
            }
            const randomIndex1 = Math.floor(Math.random() * tmpArray.length);
            const item1 = tmpArray[randomIndex1];

            // Remove the selected item from the array
            tmpArray.splice(randomIndex1, 1);

            results.push({
                key: day,
                day: day,
                title: item1['title'],
                met: item1['met']
            })
        });
        console.log(results)
        let moderate_number = 0
        let intensity_number = 0
        results.forEach((element) => {
            if (element['met'] <= 6.0) {
                moderate_number++;
            } else {
                intensity_number++;
            }
        });
        console.log(moderate_number)
        console.log(intensity_number)
        let t1 = 0;
        let t2 = 0;
        if (moderate_number == 0) {
            t2 = Math.ceil((75 / (intensity_number)) / 5) * 5;
        } else if (intensity_number == 0) {
            t1 = Math.ceil((150 / (moderate_number)) / 5) * 5;
        }
        else if ((30 * moderate_number + 40 * intensity_number) >= 150) {
            t1 = 30;
            t2 = 20;
        } else {
            t2 = Math.ceil((150 / (1.5 * moderate_number + 2 * intensity_number)) / 5) * 5;
            t1 = Math.ceil((1.5 * t2) / 5) * 5;
        }
        let newRes = []

        results.forEach((item1) => {
            newRes.push({
                key: item1.day,
                day: item1.day,
                info: <><Typography> {item1.title}</Typography> <Typography> {item1['met'] <= 6.0 ? t1 : t2}min</Typography> </>,
            })

        });
        setData(newRes)
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Typography p={3} variant='h3'>
                        Select exercise types you want, and then choose how many days you exercise per week.
                        <Typography variant='subtitle1'>

                            <Link target="_blank" href="https://www.who.int/publications/i/item/9789240015128">
                                WHO reference</Link>
                        </Typography>
                    </Typography>

                </Grid>
                <Grid item xs={0} md={2} />
                <Tooltip title="Choose more than 3 types of Exercise">
                    <Grid item xs={12} md={6} >
                        <TreeSelect {...tProps} />
                    </Grid>
                </Tooltip>
                <Grid item xs={6} md={2}>
                    <Select
                        block
                        onChange={handleChange}
                        placeholder='workout days per week'
                        options={[
                            { value: 3, label: '3' },
                            { value: 4, label: '4' },
                            { value: 5, label: '5' },
                            { value: 6, label: '6' },
                            { value: 7, label: '7' },
                        ]}
                    />
                </Grid>
                <Grid item xs={0} md={2} />
                <Grid item xs={0} md={3} />
                <Grid item xs={12} md={6} >
                    <Button type="primary" block onClick={generatePlan}>
                        Generate your weekly workout plan
                    </Button>
                </Grid>
                <Grid item xs={0} md={3} />
                {isVisible && <>
                    <Grid xs={0} md={2} />
                    <Grid item xs={12} md={8}>
                        <Table
                            pagination={false}
                            columns={columns}
                            dataSource={data}
                            className="custom-table"
                            block
                        />
                    </Grid>
                    <Grid xs={0} md={2} />
                </>
                }
                {isVisible && <>
                    <Grid>
                        <DefaultCounterCard
                            title="Guidelines for  Physical Activity"
                        />
                        <Grid container spacing={2} id="Tips" mt={2} padding="0 10%"> {/* Container with some spacing */}
                            <Grid item xs={12} md={8}> {/* Left side with four info cards */}
                                <Grid container spacing={2}>
                                    {/* Two cards in the first row */}
                                    <Grid item xs={6} md={6} style={{ marginBottom: '18%' }}>
                                        <DefaultInfoCard
                                            icon={<GroupWorkIcon />}
                                            title="Maintaining Consistency :"
                                            description={
                                                <>
                                                    <p>-Ensure a regular exercise routine.</p><br />
                                                    <p>-Balance intensity with adequate rest and recovery.</p><br />
                                                </>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6} style={{ marginBottom: '18%' }}>
                                        <DefaultInfoCard
                                            icon={<SportsKabaddiIcon />}
                                            title="Resuming Activity :"
                                            description={
                                                <>
                                                    <p>- Take a break during recovery.</p><br />
                                                    <p>- Restart at a lower intensity.</p><br />
                                                    <p>- Gradually increase to your previous level.</p><br />
                                                </>
                                            }
                                        />
                                    </Grid>
                                    {/* Two cards in the second row */}
                                    <Grid item xs={6} md={6} style={{ marginBottom: '6%' }}>
                                        <DefaultInfoCard
                                            icon={<SportsHandballIcon />}
                                            title="Increasing Exercise :"
                                            description={
                                                <>
                                                    <p>- Gradually increase the duration of  workouts.</p><br />
                                                    <p>- Aim to double the workout duration in your plan for extra health benefits.</p><br />
                                                </>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6} style={{ marginBottom: '6%' }}>
                                        <DefaultInfoCard
                                            icon={<WarningIcon />}
                                            title="Avoiding Injury :"
                                            description={
                                                <>
                                                    <p>- Be cautious when starting vigorous exercise.</p><br />
                                                    <p>- Progress gradually to prevent injury.</p><br />
                                                </>
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}> {/* Right side with one larger rotating card */}
                                <CenteredBlogCard
                                    image={picture5}
                                    title="Starting from Inactivity"
                                    description={

                                        <>
                                            <p>-Begin with short, light-intensity activities.</p><br />
                                            <p>-Gradually increase duration and frequency.</p><br />
                                            <p>-Light walking is a good start, then add moderate aerobics.</p><br />
                                            <p>-Avoid vigorous activities initially to prevent injury.</p>
                                        </>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid></>
                }
            </Grid>
        </>
    );
}

export default ExerciseTable;