

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
import { Link as DomLink } from 'react-router-dom'

// Image
import bgImage1 from "assets/images/illustrations/old_cough.jpg";
import bgImage2 from "assets/images/illustrations/old_bones.jpg";
import bgImage3 from "assets/images/illustrations/old_papule.png";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

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
            <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" mt={-20}>
                <Grid item ml={{ xs: "auto", lg: 1 }} mr={{ xs: "auto", lg: 1 }}>
                    <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" mt={{ xs: 20, sm: 18, md: 20 }} mb={{ xs: 5, sm: 4, md: 5 }} mx={10}>
                        <Element name="DiaIntroduction" className="element">
                        </Element>
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={-5}>
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
                        <Element name="DiaType" className="element">
                        </Element>
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
                                    <AccordionUsage />
                                </Grid>
                            </Grid>

                        </MKBox>

                        <Element name="DiaSymptoms" className="element">
                        </Element>
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
                                    <DomLink to="/disabetes/2">
                                        <MKButton color="info">More Content</MKButton>
                                    </DomLink>
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

