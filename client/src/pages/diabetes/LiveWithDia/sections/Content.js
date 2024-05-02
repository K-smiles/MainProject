import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import NavigationButton from "components/NavigationButton";

function Content() {
    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2}
            mt={-5} >

            <MKBox p={4} borderRadius="xl" shadow="lg">
                <MKBox
                    variant="gradient"
                    bgColor="white"
                    coloredShadow="info"
                    borderRadius="lg"
                    p={4}
                >
                    <MKTypography variant="h2" color="black">
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
                            <MKBox style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                                <iframe
                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                    src="https://www.youtube.com/embed/b6zmySnj0zQ"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </MKBox>
                        </Grid>
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
                            <MKBox style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                                <iframe
                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                    src="https://www.youtube.com/embed/dnW_9deG95Y"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </MKBox>
                        </Grid>

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
                                    allow
                                    ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </Grid>


                        <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                            <MKTypography variant="body1" color="text" style={{ fontSize: "1.5rem" }}>
                                Check out this heartfelt monologue from a diabetes patient reflecting on their journey, filled with regret for not taking preventive measures sooner.
                                This video serves as a powerful reminder to prioritize health and prevent diabetes before it's too late.
                            </MKTypography>
                        </Grid>
                    </Grid>
                </MKBox>
                <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                    <FilledInfoCard
                        icon="devices"
                        title="Risk Calculator"
                        description="Quickly assess your risk for diabetes with our simple questionnaire and receive personalized results to help guide your health decisions."
                        action={{
                            type: "internal",
                            route: "/calculator",
                            label: "Let's start"
                        }}
                    />
                </Grid>
            </MKBox>
            <NavigationButton left="/diabetes/diabetesinaus" />
        </MKBox>
    );
}

export default Content;
