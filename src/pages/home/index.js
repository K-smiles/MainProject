import React, { useState, useEffect } from 'react';
// Material Kit 2 React 
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import SpeedDial from 'components/SpeedDial/index.js';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//sub element
import Features from "./content/Features";
import bgImage from "assets/images/aobut_us.jpg";

/**
 * Home page, includes header, and sections.
 * @returns 
 */

function Home() {
    return (
        <>
            <DefaultNavbar routes={routes}
                transparent
                relative />

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
                <Container>
                    <Grid
                        container
                        item
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={{
                                fontSize: {
                                    xs: 40,
                                    sm: 60,
                                    md: 80,
                                    xl: 100,
                                }
                            }}
                        >
                            DiabeticGuardian
                        </MKTypography>
                        <MKTypography variant="h3" color="white" opacity={0.8} mt={1} mb={3}>
                            Dive into understanding diabetes, a chronic condition that can impact our lives as we age.
                            Here, you'll receive a clear introduction to what diabetes is,
                            how it progresses, and its common symptoms.
                            We cover different types of diabetes and provide easy-to-understand information,
                            empowering you to manage your health effectively.<br />
                            <MKButton
                                component="a"
                                href="#content-post"
                                color="white"
                                variant="outlined"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    fontSize: '2rem',
                                    padding: '12px 36px'
                                }}
                            >
                                Let's Go
                            </MKButton>
                        </MKTypography>
                    </Grid>
                </Container>

            </MKBox>

            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -5,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
                id="content-post"
            >
                <Features />
            </Card>

            <SimpleFooter content={footerRoutes} pt={1} px={1} mt={0} />
            <SpeedDial/>
        </>
    );
}

export default Home;
