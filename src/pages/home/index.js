import React, { useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Card from "@mui/material/Card";
import Fab from '@mui/material/Fab';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//sub element
import Places from "pages/home/content/Posts";
import SimpleFooter from "examples/Footers/SimpleFooter";
import bgImage from "assets/images/hompage.jpg";



/**
 * Home page, includes header, and sections.
 * @returns 
 */

function Home() {

    useEffect(() => {

        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        // Updating scrollSpy when the component mounts.
        scrollSpy.update();

        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);
    // Defining functions to perform different types of scrolling.
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };
    const handleSetActive = (to) => {
        console.log(to);
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
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            <h1 style={{ fontSize: "6rem", textAlign: "left" }}>DiabeticGuardian</h1>
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                            <h3>Dive into understanding diabetes, a chronic condition that can impact our lives as we age.
                                Here, you'll receive a clear introduction to what diabetes is,
                                how it progresses, and its common symptoms.
                                We cover different types of diabetes and provide easy-to-understand information,
                                empowering you to manage your health effectively.</h3>
                            <Link
                                activeClass="active"
                                to="test1"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                onSetActive={handleSetActive}
                            >
                                <Fab color="info">
                                    <ArrowDownwardIcon />
                                </Fab>
                            </Link>
                        </MKTypography>

                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Element name="test1" className="element">
                    <Places />
                </Element>

            </Card>
            <MKBox pt={1} px={1} mt={0}>
                <SimpleFooter content={footerRoutes} />
            </MKBox>
            
            <Fab style={{
                position: 'fixed',
                bottom: 16,
                right: 16,
            }} aria-label="sad" color='primary'
                onClick={scrollToTop}>
                <UpIcon />
            </Fab>

        </>
    );
}

export default Home;
