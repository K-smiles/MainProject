// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Tablist from "./Tablist";

function Content() {
    return (
        <Grid container alignItems="center">
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                ml={{ xs: "auto", lg: 1 }}
                mr={{ xs: "auto", lg: 1 }}
            >
                <MKBox
                    bgColor="white"
                    borderRadius="xl"
                    shadow="lg"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    mt={{ xs: 2, sm: 5, md: 5 }}
                    mb={{ xs: 2, sm: 5, md: 5 }}
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
                        <Tablist />
                    </MKBox>
                </MKBox>
            </Grid>
        </Grid>
    );
}

export default Content;
