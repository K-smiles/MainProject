// Material Kit 2 React components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import SpeedDial from 'components/SpeedDial/index.js';
import bgImage from "assets/images/epic1background.jpg";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from "./sections/Content";

function DiabetesInAus() {
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
                <MKTypography variant="h1"
                    color="white"
                    sx={{
                        fontSize: {
                            xs: 30,
                            sm: 60,
                            md: 80,
                            xl: 100,
                        },
                        opacity: "0.8",
                        position: "middle"
                    }}
                >
                    Diabetes in Aussie
                </MKTypography>

                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center">
                    <MKButton
                        component="a"
                        href="#diabetes-australia"
                        color="white"
                        variant="outlined"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                        }}
                    >
                        <MKTypography variant="h1"
                            color="white"
                            sx={{
                                fontSize: {
                                    xs: 20,
                                    sm: 20,
                                    md: 30,
                                    xl: 30,
                                }, opacity: "0.8", position: "middle"
                            }}
                        >
                            Diabetes in Australia
                        </MKTypography>
                    </MKButton>

                    <MKButton
                        component="a"
                        href="#factors-associated"
                        color="white"
                        variant="outlined"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                        }}
                    >

                        <MKTypography variant="h1"
                            color="white"
                            sx={{
                                fontSize: {
                                    xs: 20,
                                    sm: 20,
                                    md: 30,
                                    xl: 30,
                                }, opacity: "0.8", position: "middle"
                            }}
                        >
                            Associated Factors
                        </MKTypography>
                    </MKButton>
                </Grid>
            </MKBox>

            <Content />
            <SimpleFooter pt={1} px={1} mt={0} content={footerRoutes} />
            <SpeedDial routes={routes} />
        </>
    );
}

export default DiabetesInAus;
