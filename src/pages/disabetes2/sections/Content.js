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



import VisImage from 'pages/disabetes2/sections/VisImage'
import VisImage2 from 'pages/disabetes2/sections/VisImage2'
import VisImage3 from 'pages/disabetes2/sections/VisImage3'
import VisImage4 from 'pages/disabetes2/sections/VisImage4'

import bgImage from "assets/images/epic1background.jpg";


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
                <h1 style={{ color: "white", fontSize: "90px", opacity: "0.8", position: "middle" }}>Introduction to Diabetes</h1>
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
                            <MKTypography variant="h2" color="black" ml={27}>
                                {"How is diabetes in Australia?"}
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3}>

                            {/* <MKTypography variant="body2" color="text" mb={3}>

                        </MKTypography> */}
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} style={{ fontSize: "1.5rem" }} >
                                    Between 1981 and 2000, the incidence of diabetes in Australia doubled to 1.2 million people, or 4.9 per cent of the population, with obesity, unhealthy diets and physical inactivity being the main causes.
                                    The prevalence of type 2 diabetes in older Australians is alarming, with more than 1.2 million people to be diagnosed by 2021, 59 per cent of whom will be aged 65 years or over.
                                    Thanks to the efforts of the relevant departments and NGO, and all residents of Australia, as we continue to strengthen diabetes prevention, we believe that the incidence of diabetes can be further reduced.

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
                            <MKTypography variant="h2" color="black" ml={27}>
                                {"What are the factors associated with diabetes?"}
                            </MKTypography>
                        </MKBox>

                        <MKBox p={3}>

                            {/* <MKTypography variant="body2" color="text" mb={3}>

                        </MKTypography> */}
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} style={{ fontSize: "1.5rem" }} >
                                    Factors associated with diabetes include lifestyle choices such as diet and exercise, as well as environmental factors.
                                    Age, BMI and gender have a particularly strong impact on the risk of developing diabetes. First, aging increases the risk of reduced insulin sensitivity.
                                    A high body mass index means being overweight or obese, which significantly increases the likelihood of developing diabetes because excess fat impairs insulin
                                    function. These factors highlight the importance of healthy lifestyle choices in managing diabetes



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

                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={20}

                        >
                            <MKTypography variant="h2" color="black" ml={27}>
                                {"Diabetes Patients"}
                            </MKTypography>
                        </MKBox>


                        <MKBox p={3}>
                            <MKTypography variant="h3" color="black" p={2}
                                mx={5}
                                mt={2}
                                ml={{ xs: "auto", lg: 30 }}
                                mr={{ xs: "auto", lg: 30 }}>
                                • Diabetes Australia's Warning
                            </MKTypography>
                            <Grid container spacing={3} alignItems="center">
                                {/* YouTube Video on the Left */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}>
                                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                                        <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                            src="https://www.youtube.com/embed/b6zmySnj0zQ"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </Grid>

                                {/* Text on the Right */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                                    <MKTypography variant="body1" color="text" style={{ fontSize: "1.5rem" }}>
                                        Looking out for your health as you age? Discover vital information on how type 2 diabetes affects older Australians through Diabetes Australia's critical warnings.
                                        Click to watch and learn more about protecting your well-being.
                                    </MKTypography>
                                </Grid>
                            </Grid>
                        </MKBox>

                        <MKBox p={3}>
                            <MKTypography variant="h3" color="black" p={2}
                                mx={5}
                                mt={2}
                                ml={{ xs: "auto", lg: 30 }}
                                mr={{ xs: "auto", lg: 30 }}>
                                • A Day in the Life of Someone with Diabetes
                            </MKTypography>
                            <Grid container spacing={3} alignItems="center">
                                {/* YouTube Video on the Left */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} >
                                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                                        <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                            src="https://www.youtube.com/embed/dnW_9deG95Y"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </Grid>

                                {/* Text on the Right */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                                    <MKTypography variant="body1" color="text" style={{ fontSize: "1.5rem" }}>
                                        Check out this video to see what living with diabetes is like every day. It’s a wake-up call for seniors—managing diabetes is no small task,
                                        and prevention is key to keeping your freedom and health intact!
                                    </MKTypography>
                                </Grid>
                            </Grid>
                        </MKBox>

                        <MKBox p={3}>
                            <MKTypography variant="h3" color="black" p={2}
                                mx={5}
                                mt={2}
                                ml={{ xs: "auto", lg: 30 }}
                                mr={{ xs: "auto", lg: 30 }}>
                                • A Diabetic's Inner Monologue
                            </MKTypography>
                            <Grid container spacing={3} alignItems="center">
                                {/* YouTube Video on the Left */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}>
                                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                                        <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                            src="https://www.youtube.com/embed/6CUNs5LzwoE"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </Grid>

                                {/* Text on the Right */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                                    <MKTypography variant="body1" color="text" style={{ fontSize: "1.5rem" }}>
                                        Check out this heartfelt monologue from a diabetes patient reflecting on their journey, filled with regret for not taking preventive measures sooner.
                                        This video serves as a powerful reminder to prioritize health and prevent diabetes before it's too late.
                                    </MKTypography>
                                </Grid>
                            </Grid>
                        </MKBox>

                        <MKBox p={3}>
                            <Grid container spacing={3}>
                                <Grid item ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  style={{ fontSize: "1rem" }}>
                                    Reference:
                                    <br />Diabetes Australia. (2018, June 7). *Type 2 Diabetes warning* [Video]. YouTube. https://www.youtube.com/watch?v=b6zmySnj0zQ
                                    <br />My Health My Community. (2018, March 8). *Diabetes daily routine* [Video]. YouTube. https://www.youtube.com/watch?v=dnW_9deG95Y
                                    <br />Diabetes Australia. (2019, September 16). *If I Had Known - Barry's Story* [Video]. YouTube. https://www.youtube.com/watch?v=6CUNs5LzwoE
                                    <br />1. International Working Group on the Diabetic Foot. (2020). Diabetic foot syndrome: Epidemiology, economic impact, and guidelines for management. International Journal of Wound Care, 27(3), 263-271. https://doi.org/10.1111/iwj.13781
                                    <br />2. Gregg, E. W., Li, Y., Wang, J., Burrows, N. R., Ali, M. K., Rolka, D., Williams, D. E., & Geiss, L. (2016). Changes in diabetes-related complications in the United States, 1990–2010. New England Journal of Medicine, 370(16), 1514-1523. https://www.sciencedirect.com/science/article/abs/pii/S016882271630225X
                                    <br />3. World Health Organization. (2020). Diabetes. https://www.who.int/zh/news-room/fact-sheets/detail/diabetes
                                    <br />4. Centers for Disease Control and Prevention. (2020). What is diabetes? https://www.cdc.gov/diabetes/basics/diabetes.html
                                </Grid>
                            </Grid>
                        </MKBox>
                    </MKBox>
                </Grid>
            </Grid>
        </>);
}

export default Content;







