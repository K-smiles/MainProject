

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// // Image
// import bgImage1 from "assets/images/illustrations/old_cough.jpg";
// import bgImage2 from "assets/images/illustrations/old_bones.jpg";
// import bgImage3 from "assets/images/illustrations/old_papule.png";

import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import bgImage1 from "assets/images/illustrations/old_cough.jpg";
import bgImage2 from "assets/images/illustrations/old_bones.jpg";
import bgImage3 from "assets/images/illustrations/old_papule.png";
import bgImage from "assets/images/epic1background.jpg";
import symptoms1 from "assets/images/symptoms/1.png";
import symptoms2 from "assets/images/symptoms/2.png";
import symptoms3 from "assets/images/symptoms/3.png";
import symptoms4 from "assets/images/symptoms/4.png";
import symptoms5 from "assets/images/symptoms/5.png";
import symptoms6 from "assets/images/symptoms/6.png";

// Type 1 Diabetes Data
const typeOneDiabetesData = [
    { name: 'What It Is', description: 'The body’s immune system attacks cells that make insulin.' },
    { name: 'When It Occurs', description: 'Often starts when one is young but can occur at any age.' },
    { name: 'Treatment', description: 'Requires taking insulin every day to manage.' },
];
// Type 2 Diabetes Data
const typeTwoDiabetesData = [
    { name: 'What It Is', description: "The body doesn’t use insulin well and can't keep blood sugar at normal levels." },
    { name: 'When It Occurs', description: 'It’s more common in adults but can happen at any age.' },
    { name: 'Treatment', description: 'Often managed with lifestyle changes and medication or insulin as needed.' },
];

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
                            <MKTypography variant="h2" color="black" ml={27} id="what-diabetes">
                                {"What is Diabetes?"}
                            </MKTypography>

                            {/* Navigation Buttons */}
                            <div style={{
                                position: 'absolute',
                                top: '65%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '80%', 
                                padding: '0 5%', 
                            }}>
                                <MKButton
                                    component="a"
                                    href="#what-diabetes"
                                    color="white"
                                    variant="outlined"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        fontSize: '2rem',
                                        padding: '12px 36px'
                                    }}
                                >
                                    WHAT IS DIABETES
                                </MKButton>

                                <MKButton
                                    component="a"
                                    href="#diabetes-types"
                                    color="white"
                                    variant="outlined"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        fontSize: '2rem',
                                        padding: '12px 36px'
                                    }}
                                >
                                    DIABETES TYPES
                                </MKButton>
                                <MKButton
                                    component="a"
                                    href="#diabetes-symptoms"
                                    color="white"
                                    variant="outlined"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        fontSize: '2rem',
                                        padding: '12px 36px'
                                    }}
                                >
                                    DIABETES SYMPTOMS
                                </MKButton>
                            </div>

                        </MKBox>
  
                        <MKBox p={3}>
                            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} mt={5}>
                                    <MKBox p={3}>
                                        <MKTypography mb={5} style={{ fontSize: "1.5rem" }} >
                                            Diabetes is a chronic disease of abnormal blood glucose regulation due to insufficient production or poor utilisation of insulin.
                                            <br /><br />Chronic high blood glucose levels not only cause serious damage to the nerves, skin, immune system and vascular system, but also lead to a significant increase in the incidence of heart disease, kidney disease, cataracts and other diseases.
                                        </MKTypography>
                                    </MKBox>
                                </Grid>

                                
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} mt={5}>
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
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
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
                            <MKTypography variant="h2" color="gray" ml={27} id="diabetes-types">
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
                        
                        <div style={{ display: "flex", justifyContent: "space-around", gap: "5vh", margin: "5vh", height: "45vh" }}>
                            {/* Type 1 Diabetes Card */}
                            <div style={{ width: "400px" }}>
                                <RotatingCard>
                                    <RotatingCardFront
                                        title="Type 1 Diabetes"
                                        description="Learn more about Type 1 Diabetes, its causes, symptoms, and treatments."
                                    />
                                    <RotatingCardBack
                                        image="https://bit.ly/3G5JXJZ"
                                        title="Type 1 Diabetes"
                                        description={
                                            <>
                                                <strong>{typeOneDiabetesData[0].name}:</strong> {typeOneDiabetesData[0].description}<br /><br />
                                                <strong>{typeOneDiabetesData[1].name}:</strong> {typeOneDiabetesData[1].description}<br /><br />
                                                <strong>{typeOneDiabetesData[2].name}:</strong> {typeOneDiabetesData[2].description}
                                            </>
                                        }
                                    />
                                </RotatingCard>
                            </div>

                            {/* Type 2 Diabetes Card */}
                            <div style={{ width: "400px" }}>
                                <RotatingCard>
                                    <RotatingCardFront
                                        title="Type 2 Diabetes"
                                        description="Learn more about Type 2 Diabetes, its causes, symptoms, and treatments."
                                    />
                                    <RotatingCardBack
                                        image="https://bit.ly/32ZoTGx"
                                        title="Type 2 Diabetes"
                                        description={
                                            <>
                                                <strong>{typeTwoDiabetesData[0].name}:</strong> {typeTwoDiabetesData[0].description}<br /><br />
                                                <strong>{typeTwoDiabetesData[1].name}:</strong> {typeTwoDiabetesData[1].description}<br /><br />
                                                <strong>{typeTwoDiabetesData[2].name}:</strong> {typeTwoDiabetesData[2].description}<br /><br />
                                                <p>  </p>
                                            </>
                                        }
                                    />
                                </RotatingCard>
                            </div>
                        </div>
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
                            <MKTypography variant="h2" color="gray" ml={27} id="diabetes-symptoms">
                                {"What are the early symptoms of diabetes?"}
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3}>
                            <Grid container spacing={2}>
                                
                                <Grid item xs={12} md={1.5}></Grid> 
                                <Grid item xs={12} md={3}>
                                    <BackgroundBlogCard
                                        image={symptoms1}
                                        title="1.Increased Thirst"
                                        description="Seniors might find themselves more thirsty than usual, which can be a sign that the body is trying to balance sugar levels."

                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <BackgroundBlogCard
                                        image={symptoms2}
                                        title="2.Frequent Urination"
                                        description="More frequent trips to the bathroom may be a result of the body’s attempt to expel excess sugar."

                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <BackgroundBlogCard
                                        image={symptoms3}
                                        title="3.Increased Hunger"
                                        description="Despite regular meals, a persistent hunger can indicate that the body isn’t using sugar properly for energy."

                                    />
                                </Grid>
                                <Grid item xs={12} md={1.5}></Grid>

                              
                                <Grid item xs={12} md={1.5}></Grid> 
                                <Grid item xs={12} md={3}>
                                    <BackgroundBlogCard
                                        image={symptoms4}
                                        title="4.Unintended Weight Loss"
                                        description="Unexpected weight loss may occur as the body uses alternative energy sources due to sugar not being utilized effectively."

                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <BackgroundBlogCard
                                        image={symptoms5}
                                        title={
                                            <span>
                                                5. Fatigue<br /><br />
                                            </span>
                                        }
                                        description="Seniors may feel unusually tired if their body is struggling to convert sugar into energy."

                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <BackgroundBlogCard
                                        image={symptoms6}
                                        title="6.Foot Complications"
                                        description="Early diabetic foot symptoms, such as numbness or skin changes, can escalate to severe complications like ulcers or even gangrene if not addressed."

                                    />
                                </Grid>
                                <Grid item xs={12} md={1.5}></Grid> 
                            </Grid>
                        </MKBox>
                    </MKBox>
                </Grid>
            </Grid >
        </>
    );
}

export default Content;

