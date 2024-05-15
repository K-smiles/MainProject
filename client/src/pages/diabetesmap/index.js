import React from 'react';
// Material Kit 2 React 
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SpeedDial from 'components/SpeedDial/index.js';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//sub element
import Content from './content';
import bgImage from "assets/images/epic2mapbg.jpg";

/**
 * Home page, includes header, and sections.
 * @returns 
 */
function DiabeticMap() {

    return (
        <>
            <DefaultNavbar routes={routes}
                transparent
                relative
            />
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
                            DiabeticMap
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
            <Content />
            <SimpleFooter content={footerRoutes} pt={1} px={1} mt={0} />
            <SpeedDial routes={routes} />
        </>
    );
}

export default DiabeticMap;
