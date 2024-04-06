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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";

function Places() {
    return (
        <MKBox component="section" py={2}>
            <Container>
                <Grid container item xs={12} lg={6}>
                    <MKTypography variant="h3" mb={6}>
                        Sections
                    </MKTypography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={15} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post1}
                            title="Diabetes Introduction"
                            description="Discover the essentials of diabetes, 
                            from its basic definition to understanding its various types and how it affects your health"
                            action={{
                                type: "internal",
                                route: "/disabetes",
                                color: "info",
                                label: "read more",
                            }}
                        />
                    </Grid>
                    <Grid item xs={15} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post1}
                            title="Diabetes risk calculator"
                            description="Quickly assess your risk for diabetes with our simple 
                            questionnaire and receive personalized results to help guide your health decisions."
                            action={{
                                type: "internal",
                                route: "/calculator",
                                color: "info",
                                label: "read more",
                            }}
                        />
                    </Grid>
                    <Grid item xs={15} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post1}
                            title="子标题"
                            description="描述"
                            action={{
                                type: "internal",
                                route: "/#",
                                color: "info",
                                label: "read more",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Places;
{/* <Grid item xs={12} sm={6} lg={3}>
<BackgroundBlogCard
    image={post4}
    title="Flexible work hours"
    description="Rather than worrying about switching offices every couple years, you stay in the same place."
    action={{
        type: "internal",
        route: "/pages/blogs/author",
        label: "read more",
    }}
/>
</Grid> */}