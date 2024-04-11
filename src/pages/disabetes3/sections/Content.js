import React, { useState, useEffect, useRef } from 'react';
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import MKButton from "components/MKButton";

import bgImage from "assets/images/epic1background.jpg";

function Content() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
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
                <h1 style={{ color: "white", fontSize: "90px", opacity: "0.8", position: "middle" }}>Living with diabetes</h1>
            </MKBox>


            <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" mt={-23}>
                <Grid item ml={{ xs: "auto", lg: 1 }} mr={{ xs: "auto", lg: 1 }}>
                    <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" mt={{ xs: 20, sm: 18, md: 20 }} mb={{ xs: 20, sm: 18, md: 20 }} mx={10}>
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={20}

                        >
                            <MKTypography variant="h2" color="black" ml={27}>
                                {"Diabetes Patients"}
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3}>
                            <MKTypography variant="h3" color="black" p={2}
                                mx={5}
                                mt={2}
                                ml={{ xs: "auto", lg: 30 }}
                                mr={{ xs: "auto", lg: 30 }}>
                                • Diabetes Australia's Warning
                            </MKTypography>
                            <Grid container spacing={3} alignItems="center">
                                {/* YouTube Video on the Left */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}>
                                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                                        <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                            src="https://www.youtube.com/embed/b6zmySnj0zQ"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </Grid>

                                {/* Text on the Right */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                                    <MKTypography variant="body1" color="text" style={{ fontSize: "1.5rem" }}>
                                        Looking out for your health as you age? Discover vital information on how type 2 diabetes affects older Australians through Diabetes Australia's critical warnings.
                                        Click to watch and learn more about protecting your well-being.
                                    </MKTypography>
                                </Grid>
                            </Grid>
                        </MKBox>

                        <MKBox p={3}>
                            <MKTypography variant="h3" color="black" p={2}
                                mx={5}
                                mt={2}
                                ml={{ xs: "auto", lg: 30 }}
                                mr={{ xs: "auto", lg: 30 }}>
                                • A Day in the Life of Someone with Diabetes
                            </MKTypography>
                            <Grid container spacing={3} alignItems="center">
                                {/* YouTube Video on the Left */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }} >
                                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                                        <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                            src="https://www.youtube.com/embed/dnW_9deG95Y"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </Grid>

                                {/* Text on the Right */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                                    <MKTypography variant="body1" color="text" style={{ fontSize: "1.5rem" }}>
                                        Check out this video to see what living with diabetes is like every day. It’s a wake-up call for seniors—managing diabetes is no small task,
                                        and prevention is key to keeping your freedom and health intact!
                                    </MKTypography>
                                </Grid>
                            </Grid>
                        </MKBox>

                        <MKBox p={3}>
                            <MKTypography variant="h3" color="black" p={2}
                                mx={5}
                                mt={2}
                                ml={{ xs: "auto", lg: 30 }}
                                mr={{ xs: "auto", lg: 30 }}>
                                • A Diabetic's Inner Monologue
                            </MKTypography>
                            <Grid container spacing={3} alignItems="center">
                                {/* YouTube Video on the Left */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}>
                                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                                        <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                            src="https://www.youtube.com/embed/6CUNs5LzwoE"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </Grid>

                                {/* Text on the Right */}
                                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                                    <MKTypography variant="body1" color="text" style={{ fontSize: "1.5rem" }}>
                                        Check out this heartfelt monologue from a diabetes patient reflecting on their journey, filled with regret for not taking preventive measures sooner.
                                        This video serves as a powerful reminder to prioritize health and prevent diabetes before it's too late.
                                    </MKTypography>
                                </Grid>
                            </Grid>
                        </MKBox>

                        {/* Continue with existing content sections */}
                    </MKBox>
                </Grid>
            </Grid>

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

export default Content;







