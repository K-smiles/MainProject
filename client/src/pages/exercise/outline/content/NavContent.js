// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/exercise_background.jpg";
import MKButton from "components/MKButton";
import Grid from "@mui/material/Grid";

function NavContent() {
    return (
        <>
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
                <MKTypography variant="h5"
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
                    Physical Activity and Diabetes
                </MKTypography>

                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center">
                    <MKButton
                        component="a"
                        href="#Benefits"
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
                            Benefits of Physical Activity
                        </MKTypography>
                    </MKButton>

                    <MKButton
                        component="a"
                        href="#Tips"
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
                            Tips for Sustaining Exercise
                        </MKTypography>
                    </MKButton>

                    <MKButton
                        component="a"
                        href="#Ranking"
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
                            Word Cloud Ranking by Gender
                        </MKTypography>
                    </MKButton>
                </Grid>
            </MKBox>
        </>
    );
}

export default NavContent;