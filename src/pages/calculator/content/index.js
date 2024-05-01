// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Tablist from "./Tablist";

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
                    </MKBox>
                </Grid>
            </Grid>
        </MKBox>


    );
}

export default Content;
