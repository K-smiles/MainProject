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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import AccordionUsage from "pages/disabetes/sections/Aoord";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'
// Image
import bgImage1 from "assets/images/illustrations/old_cough.jpg";
import bgImage2 from "assets/images/illustrations/old_bones.jpg";
import bgImage3 from "assets/images/illustrations/old_papule.png";
import bgImage from "assets/images/epic1background.jpg";


function Content() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                                {"What is Diabetes?"}
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3}>
                            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={4} mt={5} ml={{ xs: "auto", lg: 30 }} >
                                    <MKBox p={3}>
                                        <MKTypography mb={5} style={{ fontSize: "1.5rem" }} >
                                            Diabetes is a chronic disease of abnormal blood glucose regulation due to insufficient production or poor utilisation of insulin.
                                            <br /><br />Chronic high blood glucose levels not only cause serious damage to the nerves, skin, immune system and vascular system, but also lead to a significant increase in the incidence of heart disease, kidney disease, cataracts and other diseases.
                                        </MKTypography>
                                    </MKBox>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <div style={{ width: '450px', height: '460px', marginTop: '0%', marginLeft: '20%' }}>
                                        <Slider {...settings}>
                                            <div>
                                                <img src={bgImage1} alt="Image 1" style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    border: '5px solid #654321',
                                                    borderRadius: '20px',

                                                }} />


                                            </div>
                                            <div>
                                                <img src={bgImage2} alt="Image 1" style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    border: '5px solid #654321',
                                                    borderRadius: '20px',

                                                }} />

                                            </div>
                                            <div>
                                                <img src={bgImage3} alt="Image 1" style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    border: '5px solid #654321',
                                                    borderRadius: '20px',

                                                }} />

                                            </div>
                                        </Slider>
                                    </div>
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
                            mt={3}
                        >
                            <MKTypography variant="h2" color="gray" ml={27}>
                                {"What are the types of diabetes?"}
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3}>

                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} style={{ fontSize: "1.5rem" }} >
                                    There are three main types of diabetes: <br /><br />
                                    Type 1, an autoimmune disease that causes insulin deficiency; <br /><br />
                                    Type 2 diabetes, caused by the body's ineffective use of insulin, is often linked to lifestyle factors; Gestational diabetes, which occurs during pregnancy. <br /><br />
                                    However, our web project focuses on type 2 diabetes with an emphasis on prevention and management through lifestyle changes, as type 1 diabetes is largely inherited.
                                </Grid>
                            </Grid>
                        </MKBox>
                        <AccordionUsage />
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={3}
                        >
                            <MKTypography variant="h2" color="gray" ml={27}>
                                {"What are the early symptoms of diabetes?"}
                            </MKTypography>
                        </MKBox>

                        <MKBox p={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} style={{ fontSize: "1.5rem" }} >
                                    1.	<strong>Increased Thirst: </strong> <br />Seniors might find themselves more thirsty than usual, which can be a sign that the body is trying to balance sugar levels.
                                    <br /> <br />2.	<strong>Frequent Urination: </strong> <br />More frequent trips to the bathroom may be a result of the body’s attempt to expel excess sugar.
                                    <br />  <br />3.	<strong>Increased Hunger: </strong> <br />Despite regular meals, a persistent hunger can indicate that the body isn’t using sugar properly for energy.
                                    <br />  <br />4.	<strong>Unintended Weight Loss: </strong> <br />Unexpected weight loss may occur as the body uses alternative energy sources due to sugar not being utilized effectively.
                                    <br /> <br />5.	<strong>Fatigue: </strong> <br />Seniors may feel unusually tired if their body is struggling to convert sugar into energy.
                                    <br />   <br />6.	<strong>Early Signs of Diabetic Foot Complications：</strong> <br />Early diabetic foot symptoms, such as numbness or skin changes, can escalate to severe complications like ulcers or even gangrene if not addressed.
                                </Grid>
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} style={{ fontSize: "1.5rem" }} >
                                    <Link to="/disabetes/2">
                                        <MKButton color="primary">More Content</MKButton>
                                    </Link>
                                </Grid>

                            </Grid>
                        </MKBox>
                        <MKBox p={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} mt={20} style={{ fontSize: "1rem" }} >
                                    Reference:
                                    <br />1.International Working Group on the Diabetic Foot. (2020). Diabetic foot syndrome: Epidemiology, economic impact, and guidelines for management. International Journal of Wound Care, 27(3), 263-271. https://doi.org/10.1111/iwj.13781
                                    <br />2.Gregg, E. W., Li, Y., Wang, J., Burrows, N. R., Ali, M. K., Rolka, D., Williams, D. E., & Geiss, L. (2016). Changes in diabetes-related complications in the United States, 1990–2010. New England Journal of Medicine, 370(16), 1514-1523. https://www.sciencedirect.com/science/article/abs/pii/S016882271630225X
                                    <br />3.World Health Organization. (2020). Diabetes. https://www.who.int/zh/news-room/fact-sheets/detail/diabetes
                                    <br />4.Centers for Disease Control and Prevention. (2020). What is diabetes? https://www.cdc.gov/diabetes/basics/diabetes.html
                                </Grid>
                            </Grid>
                        </MKBox>

                    </MKBox>
                </Grid>
            </Grid >

        </>
    );
}

export default Content;

