/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Import necessary components
import React, { useState, useEffect, useRef } from 'react';
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import MKButton from "components/MKButton";
// Material Kit 2 React Examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";


import VisImage from 'pages/disabetes2/sections/VisImage'
import VisImage2 from 'pages/disabetes2/sections/VisImage2'
import VisImage3 from 'pages/disabetes2/sections/VisImage3'
import VisImage4 from 'pages/disabetes2/sections/VisImage4'

import bgImage from "assets/images/epic1background.jpg";

import axios from "axios";
// web back end api接口
const baseURL = "https://backdiagui-affe16e7071c.herokuapp.com/";

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
    const [isVisible, setIsVisible] = useState(false);

    // 显示按钮的逻辑
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // 滚动到顶部的方法
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data[0])
            console.log(response.data[0])
        });
    }, []);

    return (
        <>
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <h1 style={{ color: "white", fontSize: "90px", opacity: "0.8", position: "middle" }}>Diabetes in Aussie</h1>
                {/* Navigation Buttons */}
                <div style={{
                    position: 'absolute',
                    top: '60%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '20px'
                }}>
                    <MKButton
                        component="a"
                        href="#diabetes-australia"
                        color="white"
                        variant="outlined"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            fontSize: '2rem',
                            padding: '12px 36px'
                        }}
                    >
                        Diabetes in Australia
                    </MKButton>

                    <MKButton
                        component="a"
                        href="#factors-associated"
                        color="white"
                        variant="outlined"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            fontSize: '2rem',
                            padding: '12px 36px'
                        }}
                    >
                        Associated Factors
                    </MKButton>
                </div>



            </MKBox>


            <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" mt={-23}>
                <Grid item ml={{ xs: "auto", lg: 1 }} mr={{ xs: "auto", lg: 1 }}>
                    <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" mt={{ xs: 20, sm: 18, md: 20 }} mb={{ xs: 20, sm: 18, md: 20 }} mx={10}>


                        {/* Existing Content Sections */}
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={-5}

                        >
                            <MKTypography variant="h2" color="black" id="diabetes-australia" ml={27}>
                                {"How is diabetes in Australia?"}
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3}>

                            {/* <MKTypography variant="body2" color="text" mb={3}>

                        </MKTypography> */}
                            <Grid container spacing={2}>
                                <MKBox mt={10} width="100%" />
                                {/* First Row */}
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
                                </Grid>
                                {/* Space between rows */}
                                <MKBox mt={10} width="100%" />

                                {/* Second Row */}
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
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={20}
                        >
                            <MKTypography variant="h2" color="black" id="factors-associated" ml={27}>
                                {"What are the factors associated with diabetes?"}
                            </MKTypography>
                        </MKBox>

                        <MKBox p={3}>

                            {/* <MKTypography variant="body2" color="text" mb={3}>

                        </MKTypography> */}
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} style={{ fontSize: "1.5rem" }} >
                                    Factors associated with diabetes include lifestyle choices such as diet and exercise, as well as environmental factors.<br />
                                    Age, BMI and gender have a particularly strong impact on the risk of developing diabetes.
                                    <br />First, aging increases the risk of reduced insulin sensitivity.
                                    <br />A high body mass index means being overweight or obese, which significantly increases the likelihood of developing diabetes because excess fat impairs insulin
                                    function.
                                    <br />These factors highlight the importance of healthy lifestyle choices in managing diabetes



                                </Grid>
                            </Grid>
                        </MKBox>
                        {/* New Section for Diabetes Patients' Life */}

                        <Grid container justifyContent="center" spacing={0} mt={{ xs: 2, sm: 2, md: 2 }} mb={{ xs: 2, sm: 2, md: 2 }}>
                            <Grid item>
                                <MKButton variant="gradient" color="info" size="large" onClick={showChart1} sx={{ width: '220px', marginX: 2 }}>Age Influence</MKButton>
                            </Grid>
                            <Grid item>
                                <MKButton variant="gradient" color="info" size="large" onClick={showChart2} sx={{ width: '220px', marginX: 2 }}>BMI Influence</MKButton>
                            </Grid>
                            <Grid item>
                                <MKButton variant="gradient" color="info" size="large" onClick={showChart3} sx={{ width: '220px', marginX: 2 }}>Incidence by Age</MKButton>
                            </Grid>
                            <Grid item>
                                <MKButton variant="gradient" color="info" size="large" onClick={showChart4} sx={{ width: '220px', marginX: 2 }}>Incidence by Year</MKButton>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 33 }} mr={{ xs: "auto", lg: 33 }} p={2} mx={10} mt={1} alignItems="center">
                            <div>
                                {activeChart === 'VisImage' && <VisImage />}
                                {activeChart === 'VisImage2' && <VisImage2 />}
                                {activeChart === 'VisImage3' && <VisImage3 />}
                                {activeChart === 'VisImage4' && <VisImage4 />}
                            </div>
                        </Grid>
                    </MKBox>
                </Grid>
            </Grid>

            <>
                {isVisible && (
                    <MKButton
                        onClick={scrollToTop}
                        style={{
                            position: 'fixed',
                            bottom: '20px',
                            right: '10px',
                            backgroundColor: 'rgba(33, 37, 41, 0.65)',
                            color: 'white',
                            minWidth: '50px',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <i className="fas fa-arrow-up"></i>
                    </MKButton>
                )}
            </>
        </>

    );
}

export default Content;







