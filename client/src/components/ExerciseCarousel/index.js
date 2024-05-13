import * as React from 'react';
import Box from '@mui/material/Box';
import { Slider as ProgressSlider, Typography } from '@mui/material';
// import { Card } from 'components/Dock/Card'
// import { Dock } from 'components/Dock'
// import { DockCard } from 'components/Dock/DockCard'
import Slider from "react-slick";

import ExerciseCalorieCard from "examples/Cards/ExerciseCalorieCard";

const marks = [
    // {
    //     value: 0,
    //     label: '0h',
    // },
    // {
    //     value: 20,
    //     label: '20h',
    // },
    // {
    //     value: 37,
    //     label: '37h',
    // },
    // {
    //     value: 100,
    //     label: '100h',
    // },
];

function ExerciseCarousel({ weight, option, data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const handleChange1 = (event, newValue, activeThumb) => {
        setTime(newValue);
    };

    const [time, setTime] = React.useState(30);
    console.log(data)
    return (
        <Box >
            <Box xs={12} md={10} >
                <Typography>
                    Chose your exercise time and get your calorie
                </Typography>
                <ProgressSlider
                    aria-label="Time"
                    value={time}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    shiftStep={1}
                    step={1}
                    marks={marks}
                    min={1}
                    max={100}
                />
            </Box>
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((item) => {
                        return <ExerciseCalorieCard
                            title={item.name}
                            image={item.image}
                            met={item.met}
                            weight={weight}
                            time={time}
                        />
                    })}
                </Slider>
            </div>
            {/* <Dock>
                {GRADIENTS.map((src, index) =>
                (   <DockCard key={src}>
                        <Card src={src} />
                    </DockCard>
                )
                )}
            </Dock> */}
        </Box>
    );
}

export default ExerciseCarousel;