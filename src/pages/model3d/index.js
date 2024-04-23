
// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import Container from "@mui/material/Container";

// Images
import bgImage from "assets/images/aobut_us.jpg";

import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from './content'

function Model3d() {
    return (
        <>
            <DefaultNavbar routes={routes}
                transparent
                relative
            />
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
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            opacity={0.8}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                            fontSize='7.5rem'>
                            DiabeticGuardian
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <MKBox bgColor="white" borderRadius="xl" shadow="lg" display="flex" flexDirection="column" justifyContent="center" >
                    <MKBox
                        variant="gradient"
                        bgColor="white"
                        coloredShadow="info"
                        borderRadius="lg"
                        p={4}
                        mx={2}
                        mt={-10}
                    >
                        <MKTypography variant="h1" color="black">
                            Introduction
                        </MKTypography>
                    </MKBox>
                    <MKBox p={4} mx={2}>
                        <MKTypography variant="h2" >
                            Start
                            Welcome to the diabetes risk calculator
                            Diabetes is one of the fastest growing chronic condition in Australia.
                            To find out your risk of developing diabetes, complete the following 11 short questions.
                        </MKTypography>
                    </MKBox>
                </MKBox>
            </Grid>
            <Content />
            <SimpleFooter pt={1} px={1} mt={0} content={footerRoutes} />
        </>
    );
}

export default Model3d;
