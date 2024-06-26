

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import Viewer from "./Scene";
import MKTypography from "components/MKTypography";
import QAcontent from "./QAcontent";
import Link from '@mui/material/Link';
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
function Content() {
    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2}
            mt={-5} >

            <MKBox p={4} mx={2} borderRadius="xl" shadow="lg">
                <MKTypography variant="h3" fontWeight="bold">
                    Clicking on different parts of the model to see how diabetes can harm your body at different stages.Please slide to the bottom for more Q&A sections.
                </MKTypography>
            </MKBox>

            <MKBox bgColor="white" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}
                mx={2}
                display="flex"
                borderRadius="xl">
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    <Grid item>
                        <MKBox
                            sx={{
                                width: {
                                    xs: 300, // theme.breakpoints.up('xs')
                                    sm: 500, // theme.breakpoints.up('sm')
                                    md: 700, // theme.breakpoints.up('md')
                                    lg: 900, // theme.breakpoints.up('lg')
                                    xl: 1000, // theme.breakpoints.up('xl')
                                    xxl: 1200
                                },
                                height: {
                                    xs: 300, // theme.breakpoints.up('xs')
                                    sm: 300, // theme.breakpoints.up('sm')
                                    md: 400, // theme.breakpoints.up('md')
                                    lg: 500, // theme.breakpoints.up('lg')
                                    xl: 600, // theme.breakpoints.up('xl')
                                    xxl: 700
                                },
                            }}
                            mb={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <Viewer />
                        </MKBox>
                    </Grid>
                </Grid>
            </MKBox>

            <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" >
                <MKBox
                    mt={{ xs: 1, sm: 2, md: 3 }}
                    mb={{ xs: 1, sm: 2, md: 3 }}
                    mx={2}
                >
                    <MKTypography variant="h1" color="black">
                        Q&A
                    </MKTypography>
                </MKBox>

                <MKBox mt={{ xs: 1, sm: 2, md: 3 }}
                    mb={{ xs: 1, sm: 2, md: 3 }}
                    mx={2}>
                    <QAcontent />
                </MKBox>
            </MKBox>
            <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" >
                <MKBox
                    mt={{ xs: 1, sm: 2, md: 3 }}
                    mb={{ xs: 1, sm: 2, md: 3 }}
                    mx={2}
                >
                    <Link target="_blank" href="https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193" color='info'>Link to reference</Link>
                </MKBox>
            </MKBox>
            <MKBox xs={12} mt={2} mb={2} mx={2}>
                <FilledInfoCard
                    title="Risk Calculator"
                    description="Quickly assess your risk for diabetes with our simple questionnaire and receive personalized results to help guide your health decisions."
                    action={{
                        type: "internal",
                        route: "/calculator",
                        label: "Let's start"
                    }}
                />
            </MKBox>

        </MKBox>
    );
}

export default Content;
