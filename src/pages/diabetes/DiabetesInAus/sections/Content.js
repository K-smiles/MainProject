// Import necessary components
import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
// Material Kit 
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

import VisImage from './VisImage'
import VisImage2 from './VisImage2'
import VisImage3 from './VisImage3'
import VisImage4 from './VisImage4'


import NavigationButton from 'components/NavigationButton';

function Content() {

    const [activeChart, setActiveChart] = useState('none');

    const showChart1 = () => {
        setActiveChart('VisImage');
    };

    const showChart2 = () => {
        setActiveChart('VisImage2');
    };

    const showChart3 = () => {
        setActiveChart('VisImage3');
    };

    const showChart4 = () => {
        setActiveChart('VisImage4');
    };

    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2}
            mt={-5} >

            <MKBox p={4} borderRadius="xl" shadow="lg">
                <MKBox
                    variant="gradient"
                    bgColor="white"
                    coloredShadow="info"
                    borderRadius="lg"
                    p={4}
                >
                    <MKTypography variant="h2" color="black" id="diabetes-australia">
                        {"How is diabetes in Australia?"}
                    </MKTypography>
                </MKBox>

                <MKBox p={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <DefaultCounterCard
                                count='Double'
                                title="Doubling of Diabetes"
                                description="Between 1981 and 2000, diabetes incidence in Australia doubled to 1.2 million people."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DefaultCounterCard
                                count="4.9%"
                                title="4.9% Population"
                                description="By 2000, 4.9% of the Australian population was affected by diabetes."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DefaultCounterCard
                                count="1.2 M"
                                title="1.2 Million by 2021"
                                description="More than 1.2 million older Australians expected to be diagnosed with type 2 diabetes by 2021."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DefaultCounterCard
                                count="59%"
                                title="59% Over 65"
                                description="Of those anticipated diagnoses, 59% will be individuals aged 65 years or over."
                            />
                        </Grid>
                    </Grid>
                </MKBox>

            </MKBox>

            <MKBox p={4} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}
            >
                <MKBox
                    variant="gradient"
                    bgColor="white"
                    coloredShadow="info"
                    borderRadius="lg"
                    p={4}
                >
                    <MKTypography variant="h2" color="black" id="factors-associated">
                        {"What are the factors associated with diabetes?"}
                    </MKTypography>
                </MKBox>

                <MKBox p={3}>
                    <MKTypography variant="body1" color="black">
                        The 3 elements that have the greatest impact on the risk of developing diabetes are:
                        <br /> Age: increases the risk of reduced insulin sensitivity
                        <br />  Body mass index: increases the risk of reduced insulin sensitivity
                        <br />  Gender: the risk of developing diabetes varies by gender
                    </MKTypography>
                </MKBox>

                <Grid container>
                    <Grid item xs={6} md={3}>
                        <MKButton variant="gradient" color="info" size="large" onClick={showChart1} sx={{ width: '220px', }}>Age Influence</MKButton>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <MKButton variant="gradient" color="info" size="large" onClick={showChart2} sx={{ width: '220px', }}>BMI Influence</MKButton>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <MKButton variant="gradient" color="info" size="large" onClick={showChart3} sx={{ width: '220px', }}>Incidence by Age</MKButton>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <MKButton variant="gradient" color="info" size="large" onClick={showChart4} sx={{ width: '220px', }}>Incidence by Year</MKButton>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 10 }} mr={{ xs: "auto", lg: 2 }} p={2} mx={2} mt={1} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        overflow: 'hidden'
                    }}>
                        <div>
                            {activeChart === 'VisImage' && <VisImage />}
                            {activeChart === 'VisImage2' && <VisImage2 />}
                            {activeChart === 'VisImage3' && <VisImage3 />}
                            {activeChart === 'VisImage4' && <VisImage4 />}
                        </div>
                    </Grid>
                </Grid>
            </MKBox>


            <NavigationButton left="/diabetes/type" right="/diabetes/livewithdia" />



        </MKBox>
    );
}

export default Content;





