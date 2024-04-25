// Import necessary components
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import MKButton from "components/MKButton";
// Material Kit 2 React Examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

import VisImage from './VisImage'
import VisImage2 from './VisImage2'
import VisImage3 from './VisImage3'
import VisImage4 from './VisImage4'

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
                <MKTypography variant="h1"
                    color="white"
                    sx={{
                        fontSize: {
                            xs: 30,
                            sm: 60,
                            md: 80,
                            xl: 100,
                        },
                        opacity: "0.8",
                        position: "middle"
                    }}
                >
                    Diabetes in Aussie
                </MKTypography>

                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center">
                    <MKButton
                        component="a"
                        href="#diabetes-australia"
                        color="white"
                        variant="outlined"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                        }}
                    >
                        <MKTypography variant="h1"
                            color="white"
                            sx={{
                                fontSize: {
                                    xs: 20,
                                    sm: 20,
                                    md: 30,
                                    xl: 30,
                                }, opacity: "0.8", position: "middle"
                            }}
                        >
                            Diabetes in Australia
                        </MKTypography>
                    </MKButton>

                    <MKButton
                        component="a"
                        href="#factors-associated"
                        color="white"
                        variant="outlined"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                        }}
                    >

                        <MKTypography variant="h1"
                            color="white"
                            sx={{
                                fontSize: {
                                    xs: 20,
                                    sm: 20,
                                    md: 30,
                                    xl: 30,
                                }, opacity: "0.8", position: "middle"
                            }}
                        >
                            Associated Factors
                        </MKTypography>
                    </MKButton>

                </Grid>
            </MKBox>


            <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" mt={-23}>
                <Grid item ml={{ xs: "auto", lg: 1 }} mr={{ xs: "auto", lg: 1 }}>
                    <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex"
                        flexDirection="column" justifyContent="center"
                        mt={{ xs: 20, sm: 18, md: 20 }}
                        mb={{ xs: 5, sm: 4, md: 5 }}
                        mx={5}>

                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={-5}

                        >
                            <MKTypography variant="h2" color="black" id="diabetes-australia" ml={5}>
                                {"How is diabetes in Australia?"}
                            </MKTypography>
                        </MKBox>

                        <MKBox p={3}>
                            <Grid container spacing={2}>
                                <Grid container>
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
                            </Grid>
                        </MKBox>

                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={2}
                        >
                            <MKTypography variant="h2" color="black" id="factors-associated" ml={5}>
                                {"What are the factors associated with diabetes?"}
                            </MKTypography>
                        </MKBox>
                        <Grid item mt={1}
                            sx={{ ml: { xs: 4, sm: 6, md: 10 }, fontSize: "1.5rem" }} >
                            <MKBox p={3}>
                                <MKTypography variant="body1" color="black" ml={5} >
                                    The 3 elements that have the greatest impact on the risk of developing diabetes are:
                                    <br /> Age: increases the risk of reduced insulin sensitivity
                                    <br />  Body mass index: increases the risk of reduced insulin sensitivity
                                    <br />  Gender: the risk of developing diabetes varies by gender
                                </MKTypography>
                            </MKBox>
                        </Grid>

                        <Grid container justifyContent="center" spacing={0} mt={{ xs: 2, sm: 2, md: 2 }} mb={{ xs: 2, sm: 2, md: 2 }} >
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
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 10 }} mr={{ xs: "auto", lg: 2 }} p={2} mx={2} mt={1} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%', // 确保 Grid 项宽度为100%
                                overflow: 'hidden' // 防止内容溢出
                            }}>
                                <div>
                                    {activeChart === 'VisImage' && <VisImage />}
                                    {activeChart === 'VisImage2' && <VisImage2 />}
                                    {activeChart === 'VisImage3' && <VisImage3 />}
                                    {activeChart === 'VisImage4' && <VisImage4 />}
                                </div>
                            </Grid>
                        </Grid>
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={3}
                        >
                        </MKBox>
                        <MKBox p={3} >
                            <Grid spacing={2} container>
                                <MKButton variant="gradient" color="warning" >
                                    <Link to="/diabetes/type">Pre</Link>
                                </MKButton>
                                <MKButton variant="gradient" color="info" >
                                    <Link to="/diabetes/livewithdia">Next</Link>
                                </MKButton>
                            </Grid>
                        </MKBox>
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







