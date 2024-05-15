import React, { useState, useEffect, useRef } from 'react';
// @mui material 
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import SpeedDial from 'components/SpeedDial/index.js';
// Images
import bgImage from "assets/images/aobut_us.jpg";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from 'pages/calculator/content'


function Calculator() {

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
                <MKTypography variant="h1"
                    color="white"
                    sx={{
                        fontSize: {
                            xs: 40,
                            sm: 60,
                            md: 80,
                            xl: 100,
                        },
                        opacity: "0.8",
                        position: "middle"
                    }}
                >
                    DiabeticGuardian
                </MKTypography>
            </MKBox>
            <Content />
            <SimpleFooter content={footerRoutes} pt={1} px={1} mt={0} />
            <SpeedDial routes={routes} />
        </>
    );
}

export default Calculator;
