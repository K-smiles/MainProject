/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import BasicTabs from "./Tablist";
function Content() {
    return (
        <Grid container spacing={3} alignItems="center">
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                ml={{ xs: "auto", lg: 6 }}
                mr={{ xs: "auto", lg: 6 }}
            >

                <MKBox
                    bgColor="white"
                    borderRadius="xl"
                    shadow="lg"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    mt={{ xs: 20, sm: 18, md: 20 }}
                    mb={{ xs: 20, sm: 18, md: 20 }}
                    mx={3}
                >
                    <MKBox
                        variant="gradient"
                        bgColor="info"
                        coloredShadow="info"
                        borderRadius="lg"
                        p={2}
                        mx={2}
                        mt={-3}
                    >
                        <MKTypography variant="h3" color="white">
                            Risk Calculator
                        </MKTypography>
                    </MKBox>
                    <MKBox p={4}
                        mx={-1}
                        mt={-3}>
                        <BasicTabs />
                    </MKBox>
                </MKBox>
            </Grid>
        </Grid>
    );
}

export default Content;
