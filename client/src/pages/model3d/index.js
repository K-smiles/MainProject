
import React, { useState, useEffect } from 'react';

import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import MKButton from 'components/MKButton';
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/epic4backg.jpg";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from './content'

function Model3d() {
    const [isVisible, setIsVisible] = useState(false);
    // 显示按钮的逻辑
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // 滚动到顶部的方法
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
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
                            opacity={0.8}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                            fontSize='7.5rem'>
                            Diabetic3DModel
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
            <Content />
            <SimpleFooter pt={1} px={1} mt={0} content={footerRoutes} />
            <>
                {isVisible && (
                    <MKButton
                        onClick={scrollToTop}
                        style={{
                            position: 'fixed',
                            bottom: '20px',
                            right: '10px',
                            backgroundColor: 'rgba(33, 37, 41, 0.65)',
                            color: 'white',
                            minWidth: '50px',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <i className="fas fa-arrow-up"></i>
                    </MKButton>
                )}
            </>
        </>
    );
}

export default Model3d;