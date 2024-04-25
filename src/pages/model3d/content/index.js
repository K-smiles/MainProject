

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import Viewer from "./Scene";
import MKTypography from "components/MKTypography";
import QAcontent from "./QAcontent";

function Content() {
    return (
        <>
            <MKBox sx={{ p: 4 }} bgColor="white" shadow="lg"
                mt={{ xs: 1, sm: -1, md: -1 }}
                mb={{ xs: 1, sm: 2, md: 3 }}
                mx={3}
                display="flex"
                borderRadius="xl">
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    <Grid item>
                        <MKBox
                            mx={-1}
                            mt={-1}
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
                                    lg:500, // theme.breakpoints.up('lg')
                                    xl: 600, // theme.breakpoints.up('xl')
                                    xxl: 700
                                },
                            }}
                        >
                            <Viewer />
                        </MKBox>
                    </Grid>
                </Grid>
            </MKBox>
            <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" >
                    <MKBox
                        variant="gradient"
                        bgColor="white"
                        coloredShadow="info"
                        borderRadius="lg"
                        p={4}
                        mx={2}
                        mt={-5}
                    >
                        <MKTypography variant="h1" color="black">
                            QA
                        </MKTypography>
                    </MKBox>
                    <MKBox p={4} mx={2}>
                            <QAcontent/>
                    </MKBox>
                </MKBox>
        </>
    );
}

export default Content;
