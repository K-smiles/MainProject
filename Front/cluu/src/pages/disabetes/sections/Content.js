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

import VisImage from 'pages/disabetes/sections/VisImage'
import AccordionUsage from "pages/disabetes/sections/Aoord";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";



function Content() {

    return (
        <Grid container
            direction="row"
            justifyContent="center" spacing={3} alignItems="center">
            <Grid
                item
                ml={{ xs: "auto", lg: 6 }}
                mr={{ xs: "auto", lg: 6 }}
            >
                <MKBox
                    bgColor="white"
                    borderRadius="xl"
                    shadow="lg"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    mt={{ xs: 20, sm: 18, md: 20 }}
                    mb={{ xs: 20, sm: 18, md: 20 }}
                    mx={3}
                >
                    <MKBox
                        variant="gradient"
                        bgColor="info"
                        coloredShadow="info"
                        borderRadius="lg"
                        p={2}
                        mx={2}
                        mt={-3}
                    >
                        <MKTypography variant="h3" color="white">
                            What is Disabetes?
                        </MKTypography>
                    </MKBox>
                    <MKBox p={3}>

                        {/* <MKTypography variant="body2" color="text" mb={3}>

                        </MKTypography> */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8}>
                                Diabetes is a chronic condition that arises either due to the pancreas not producing enough insulin
                                or the body's ineffective use of insulin. This hormone regulates blood sugar.
                                Prolonged elevated blood sugar levels, a common effect of unmanaged diabetes,
                                can lead to serious damage to many systems of the body, especially nerves and blood vessels.
                                Over the years, the prevalence of diabetes in adults and its impact on mortality
                                before the age of 70 has been significant. It's also a leading cause of kidney disease
                                and a contributor to a notable percentage of cardiovascular diseases.
                                Diabetes, significantly impacting older adults, has doubled in prevalence in Australia
                                from 1981 to 2000. Presently, it affects 1.2 million Australians, accounting for 4.9%
                                of the population, with rising trends due to obesity and sedentary lifestyles.
                                This surge has elevated the incidence of diabetes-related disabilities,
                                including cardiovascular complications and lower limb issues, stressing the importance
                                of management and preventive care for seniors to preserve quality of life.
                                
                                <AccordionUsage />

                            </Grid>
                            <Grid item xs={12} md={4}>
                                <MKBox
                                    display={{ xs: "none", lg: "flex" }}
                                    width="calc(100% - 2rem)"
                                    height="calc(50vh - 2rem)"
                                    borderRadius="lg"
                                    ml={2}
                                    mt={2}
                                    sx={{ backgroundImage: `url(${bgImage})` }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} mt={{ xs: 2, sm: 2, md: 2 }}
                            mb={{ xs: 2, sm: 2, md: 2 }}
                            mx={1}>
                            <Grid item xs={12} md={4}>
                                <VisImage image={'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=328&h=328&fit=crop&auto=forma'} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <VisImage image={'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=328&h=328&fit=crop&auto=forma'} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <VisImage image={'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=328&h=328&fit=crop&auto=forma'} />
                            </Grid>
                        </Grid>
                        <MKTypography variant="body2" color="text" mb={3}>
                            1.International Working Group on the Diabetic Foot. (2020). Diabetic foot syndrome: Epidemiology, economic impact, and guidelines for management. International Journal of Wound Care, 27(3), 263-271. https://doi.org/10.1111/iwj.13781
                            <br />2.Gregg, E. W., Li, Y., Wang, J., Burrows, N. R., Ali, M. K., Rolka, D., Williams, D. E., & Geiss, L. (2016). Changes in diabetes-related complications in the United States, 1990–2010. New England Journal of Medicine, 370(16), 1514-1523. https://www.sciencedirect.com/science/article/abs/pii/S016882271630225X
                            <br />3.World Health Organization. (2020). Diabetes. https://www.who.int/zh/news-room/fact-sheets/detail/diabetes
                            <br />4.Centers for Disease Control and Prevention. (2020). What is diabetes? https://www.cdc.gov/diabetes/basics/diabetes.html
                        </MKTypography>
                    </MKBox>

                </MKBox>
            </Grid>
        </Grid>
    );
}

export default Content;
