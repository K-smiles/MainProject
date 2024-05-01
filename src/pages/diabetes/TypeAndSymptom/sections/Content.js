// @mui material components
import Grid from "@mui/material/Grid";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";


//image
import bgImage1 from "assets/images/illustrations/old_cough.jpg";
import bgImage2 from "assets/images/illustrations/old_bones.jpg";
import bgImage3 from "assets/images/illustrations/old_papule.png";
import symptoms1 from "assets/images/symptoms/1.png";
import symptoms2 from "assets/images/symptoms/2.png";
import symptoms3 from "assets/images/symptoms/3.png";
import symptoms4 from "assets/images/symptoms/4.png";
import symptoms5 from "assets/images/symptoms/5.png";
import symptoms6 from "assets/images/symptoms/6.png";
import NavigationButton from "components/NavigationButton";

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
    // 在组件内部
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 使用theme.breakpoints.down检查当前屏幕尺寸是否为移动端尺寸

    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2}
            mt={-5} >
            <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                <Grid item>
                    <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex"
                        flexDirection="column" justifyContent="center"
                        mt={{ xs: 1, sm: 2, md: 3 }}
                        mb={{ xs: 1, sm: 2, md: 3 }}
                    >

                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}>
                            <MKTypography variant="h2" color="black" id="what-diabetes">
                                {"What is Diabetes?"}
                            </MKTypography>
                        </MKBox>

                        <MKBox mt={{ xs: 1, sm: 2, md: 3 }}
                            mb={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid container spacing={3} justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={6} lg={5}>
                                    <MKTypography variant="body1">
                                        Diabetes is a chronic disease of abnormal blood glucose regulation due to insufficient production or poor utilisation of insulin.
                                        <br /><br />Chronic high blood glucose levels not only cause serious damage to the nerves, skin, immune system and vascular system, but also lead to a significant increase in the incidence of heart disease, kidney disease, cataracts and other diseases.
                                    </MKTypography>
                                </Grid>
                                <Grid item xs={12} md={6} lg={5} >
                                    <MKBox style={{ width: '100%', maxWidth: '350px', height: '360px', margin: '0 auto' }}> {/* 在大屏幕时图片居中且最大宽度为350px */}
                                        <Slider {...settings}>
                                            <MKBox>
                                                <img src={bgImage1} alt="Image 1" style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    border: '5px solid #654321',
                                                    borderRadius: '20px',
                                                }} />
                                            </MKBox>
                                            <MKBox>
                                                <img src={bgImage2} alt="Image 1" style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    border: '5px solid #654321',
                                                    borderRadius: '20px',

                                                }} />
                                            </MKBox>
                                            <MKBox>
                                                <img src={bgImage3} alt="Image 1" style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    border: '5px solid #654321',
                                                    borderRadius: '20px',
                                                }} />
                                            </MKBox>
                                        </Slider>
                                    </MKBox>
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
                        >
                            <MKTypography variant="h2" color="gray" ml={5} id="diabetes-types">
                                {"What are the types of diabetes?"}
                            </MKTypography>
                        </MKBox>

                        <MKBox p={3}>
                            <Grid container spacing={3}>
                                <Grid item mt={1}
                                    sx={{ ml: { xs: 4, sm: 6, md: 10 }, fontSize: "1.5rem" }} >
                                    There are two main types of diabetes: <br /><br />
                                    Type 1, an autoimmune disease that causes insulin deficiency; <br /><br />
                                    Type 2 diabetes, caused by the body's ineffective use of insulin, is often linked to lifestyle factors; Gestational diabetes, which occurs during pregnancy. <br /><br />
                                    However, our web project focuses on type 2 diabetes with an emphasis on prevention and management through lifestyle changes, as type 1 diabetes is largely inherited.
                                </Grid>
                            </Grid>
                        </MKBox>

                        <MKBox p={3} mb={isMobile ? 5 : 20}> {/* 移动端时较小的外边距 */}
                            <Grid container direction="row" spacing={3}>
                                {/* 如果是移动端，增加垂直空间 */}
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} mb={isMobile ? 20 : 2}>
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
                                                    <strong>{typeOneDiabetesData[0].name}:</strong> {typeOneDiabetesData[0].description}
                                                    <strong>{typeOneDiabetesData[1].name}:</strong> {typeOneDiabetesData[1].description}
                                                    <strong>{typeOneDiabetesData[2].name}:</strong> {typeOneDiabetesData[2].description}
                                                </>
                                            }
                                        />
                                    </RotatingCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} mb={isMobile ? 10 : 2}>
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
                                                    <strong>{typeTwoDiabetesData[0].name}:</strong> {typeTwoDiabetesData[0].description}
                                                    <strong>{typeTwoDiabetesData[1].name}:</strong> {typeTwoDiabetesData[1].description}
                                                    <strong>{typeTwoDiabetesData[2].name}:</strong> {typeTwoDiabetesData[2].description}
                                                </>
                                            }
                                        />
                                    </RotatingCard>
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
                            <MKTypography variant="h2" color="gray" ml={5} id="diabetes-symptoms">
                                {"What are the early symptoms of diabetes?"}
                            </MKTypography>
                        </MKBox>

                        <MKBox p={3}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <BackgroundBlogCard
                                        image={symptoms1}
                                        title="1.Increased Thirst"
                                        description="Seniors might find themselves more thirsty than usual, which can be a sign that the body is trying to balance sugar levels."
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <BackgroundBlogCard
                                        image={symptoms2}
                                        title="2.Frequent Urination"
                                        description="More frequent trips to the bathroom may be a result of the body’s attempt to expel excess sugar."

                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <BackgroundBlogCard
                                        image={symptoms3}
                                        title="3.Increased Hunger"
                                        description="Despite regular meals, a persistent hunger can indicate that the body isn’t using sugar properly for energy."

                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <BackgroundBlogCard
                                        image={symptoms4}
                                        title="4.Unintended Weight Loss"
                                        description="Unexpected weight loss may occur as the body uses alternative energy sources due to sugar not being utilized effectively."

                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
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
                                <Grid item xs={12} md={4}>
                                    <BackgroundBlogCard
                                        image={symptoms6}
                                        title="6.Foot Complications"
                                        description="Early diabetic foot symptoms, such as numbness or skin changes, can escalate to severe complications like ulcers or even gangrene if not addressed."
                                    />
                                </Grid>

                            </Grid>
                        </MKBox>
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={3}
                        >
                        </MKBox>
                        <NavigationButton right="/diabetes/diabetesinaus" />
                    </MKBox>
                </Grid>
            </Grid >
        </MKBox>
    );
}

export default Content;