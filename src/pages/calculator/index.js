import React, { useState, useEffect, useRef } from 'react';
// @mui material 
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Images
import bgImage from "assets/images/aobut_us.jpg";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from 'pages/calculator/content'


function Calculator() {
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
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" >
                    <MKBox
                        variant="gradient"
                        bgColor="white"
                        coloredShadow="info"
                        borderRadius="lg"
                        p={4}
                        mx={2}
                        mt={-10}
                    >
                        <MKTypography variant="h2" color="black" >
                            Introduction
                        </MKTypography>
                    </MKBox>
                    <MKBox p={4} mx={2}>
                        <MKTypography variant="body1" fontWeight="bold" >
                            Welcome to the diabetes risk calculator
                            Diabetes is one of the fastest growing chronic condition in Australia.
                            To find out your risk of developing diabetes, complete the following 11 short questions.
                        </MKTypography>
                    </MKBox>
                </MKBox>
            </Grid>
            <Content />
            <SimpleFooter content={footerRoutes} pt={1} px={1} mt={0} />
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

export default Calculator;
