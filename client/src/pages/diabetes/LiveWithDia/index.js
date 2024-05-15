import React, { useState, useEffect, useRef } from 'react';
// Material Kit 2 React components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import SpeedDial from 'components/SpeedDial/index.js';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage from "assets/images/epic1background.jpg";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from "./sections/Content";

function LiveWithDia() {

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
                            xs: 30,
                            sm: 60,
                            md: 80,
                            xl: 100,
                        },
                        opacity: "0.8",
                        position: "middle"
                    }}
                >
                    Living with diabetes
                </MKTypography>
            </MKBox>
            <Content />
            <SimpleFooter pt={1} px={1} mt={0} content={footerRoutes} />
            <SpeedDial routes={routes} />
        </>
    );
}

export default LiveWithDia;
