

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MyGoogleMap from "./MyGoogleMap";

function Content() {
    return (
        <Grid container alignItems="center">
            <Grid
                item
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
                    mt={{ xs: 5, sm: 5, md: 5 }}
                    mb={{ xs: 5, sm: 5, md: 5 }}
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
                            Map
                        </MKTypography>
                    </MKBox>
                    <MKBox p={4}
                        mx={-1}
                        mt={-3}
                        sx={{ height: '1000px' }}
                        width='1000px'
                    >
                        <MyGoogleMap/>
                    </MKBox>
                </MKBox>
            </Grid>
        </Grid>
    );
}

export default Content;
