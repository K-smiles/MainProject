import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/hompage.jpg";

function HomeHeader() {

    return (
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
                    <MKTypography variant="h1" color="white" sy={{fontSize: "6rem", textAlign: "left"}}opacity={0.8} mt={1} mb={3}>
                    DiabeticGuardian 
                    </MKTypography>
                    <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                        <h3>Dive into understanding diabetes, a chronic condition that can impact our lives as we age.
                            Here, you'll receive a clear introduction to what diabetes is,
                            how it progresses, and its common symptoms.
                            We cover different types of diabetes and provide easy-to-understand information,
                            empowering you to manage your health effectively.</h3>
                    </MKTypography>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default HomeHeader;