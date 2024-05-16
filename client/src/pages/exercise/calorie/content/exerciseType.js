import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import ExerciseCarousel from 'components/ExerciseCarousel'
import ExerciseCalorieCard from "examples/Cards/ExerciseCalorieCard";

import walkImage from 'assets/sportspictures/Walking_leisurely.jpg'
import walkExerImage from 'assets/sportspictures/Walking_for_exercise.jpg'
import weightImage from 'assets/sportspictures/weight_train.jpg'
import freeImage from 'assets/sportspictures/free_swimming.jpg'
import golfImage from 'assets/sportspictures/Golf.jpg'
import bicyImage from 'assets/sportspictures/Bicycling_moderate_effort.jpg'
import vdgImage from 'assets/sportspictures/Virtual_motion_sensing_games.jpg'

import BicyViImage from 'assets/sportspictures/Bicycling_vigorous_effort.jpg'
import swimButtImage from 'assets/sportspictures/Swimming_butterfly.jpg'
import danceImage from 'assets/sportspictures/Dance_class.jpg'
import runSlowImage from 'assets/sportspictures/Running10.jpg'
import runFastImage from 'assets/sportspictures/Running53.jpg'

// Create a Map
const optionData = [
    { value: 1, name: "Walking leisurely", met: 4.0, image: walkImage },
    { value: 2, name: "Walking for exercise", met: 6.0, image: walkExerImage },
    { value: 3, name: "Resistance (weight) training", met: 4.3, image: weightImage },
    { value: 4, name: "Swimming freestyle", met: 5.8, image: freeImage },
    { value: 5, name: "Golf", met: 4.3, image: golfImage },
    { value: 6, name: "Bicycling (moderate effort)", met: 5.3, image: bicyImage },
    { value: 7, name: "Video Game", met: 5.5, image: vdgImage },

    { value: 8, name: "Bicycling vigorous effort", met: 6.3, image: BicyViImage },
    { value: 9, name: "Swimming butterfly", met: 11.0, image: swimButtImage },
    { value: 10, name: "Dance class", met: 6.3, image: danceImage },
    { value: 11, name: "Running (10 min/km)", met: 8.5, image: runSlowImage },
    { value: 12, name: "Running (5.3 min/km)", met: 15.5, image: runFastImage },
];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ExerciseType({ weight, option }) {
    const [value, setValue] = React.useState(option != '' && option >= 8 ? 1 : 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <TreeSelect {...tProps} />
            {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Moderate Activities" {...a11yProps(0)} />
                    <Tab label="Vigorous activities" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ExerciseCarousel weight={weight} option={option} data={optionData.slice(0, 7)} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ExerciseCarousel weight={weight} option={option} data={optionData.slice(7, 12)} />
            </CustomTabPanel> */}

            <ExerciseCalorieCard
                title={optionData[option].name}
                image={optionData[option].image}
                met={optionData[option].met}
                weight={weight}
            />
        </Box>
    );
}