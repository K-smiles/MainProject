// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Tablist from "./Tablist";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import Link from '@mui/material/Link';

function Content() {
    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="row" justifyContent="center"
            mx={2}
            mt={-5} >
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                >

                    <MKBox bgColor="white" borderRadius="xl"
                        shadow="lg" display="flex" flexDirection="column" justifyContent="center">
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={4}
                            mx={2}
                            mt={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <MKTypography variant="h2" color="black" >
                                Introduction
                            </MKTypography>
                        </MKBox>
                        <MKBox p={4}>
                            <MKTypography variant="h3" fontWeight="bold" >
                                Welcome to the diabetes risk calculator
                                Diabetes is one of the fastest growing chronic condition in Australia.
                                To find out your risk of developing diabetes, complete the following 11 short questions.
                            </MKTypography>
                        </MKBox>
                    </MKBox>

                    <MKBox
                        bgColor="white"
                        borderRadius="xl"
                        shadow="lg"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        mt={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <MKBox
                            variant="gradient"
                            bgColor="info"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={2}
                            mx={2}
                        >
                            <MKTypography variant="h3" color="white">
                                Risk Calculator
                            </MKTypography>
                        </MKBox>

                        <MKBox
                            bgColor="white"
                            borderRadius="xl"
                            shadow="lg"
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            mt={{ xs: 1, sm: 2, md: 3 }}
                            mb={{ xs: 1, sm: 2, md: 3 }}
                            mx={3}
                        >
                            <Tablist />
                        </MKBox>
                        <MKBox
                            variant="gradient"
                            bgColor="white"
                            borderRadius="lg"
                            p={2}
                            mx={2}
                            mt={3}
                        >
                        </MKBox>
                        <Grid item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                            <FilledInfoCard
                                title="Diabetic Map"
                                description="you can explore how different hospitals.  This feature helps you find the closest hospital and provides you with GP Info."
                                action={{
                                    type: "internal",
                                    route: "/map",
                                    label: "Let's start"
                                }}
                            />
                        </Grid>
    
                    </MKBox>

                    <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" >
                        <MKBox
                            mt={{ xs: 1, sm: 2, md: 3 }}
                            mb={{ xs: 1, sm: 2, md: 3 }}
                            mx={2}
                        >
                            <Link target="_blank" href="https://www.health.gov.au/resources/apps-and-tools/the-australian-type-2-diabetes-risk-assessment-tool-ausdrisk/the-australian-type-2-diabetes-risk-assessment-tool-ausdrisk-non-interactive"
                                color='info'>
                                Link to reference</Link>
                        </MKBox>
                    </MKBox>
                </Grid>
            </Grid>


        </MKBox>
    );
}

export default Content;
