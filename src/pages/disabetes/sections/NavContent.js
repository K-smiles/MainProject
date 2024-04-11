// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/epic1background.jpg";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

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
            >   <MKTypography variant="h1" style={{ color: "white", fontSize: "90px", opacity: "0.8", position: "middle" }}>
                    Introduction to Diabetes
                </MKTypography>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -2,
                    mb: 3,
                    backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >       <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={4} >
                            <Link
                                activeClass="active"
                                to="DiaIntroduction"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <FilledInfoCard
                                    variant="gradient"
                                    color="info"
                                    icon="flag"
                                    title="Diabetes Introduction"
                                    action={{
                                        type: "external",
                                        route: "#",
                                        label: "Let's Go",
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Link
                                activeClass="active"
                                to="DiaType"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <FilledInfoCard
                                    variant="gradient"
                                    color="info"
                                    icon="precision_manufacturing"
                                    title="Diabetes Type "
                                    action={{
                                        type: "external",
                                        route: "#",
                                        label: "Let's Go",
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Link
                                activeClass="active"
                                to="DiaSymptoms"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <FilledInfoCard
                                    variant="gradient"
                                    color="info"
                                    icon="apps"
                                    title="Diabetes Symptoms"
                                    action={{
                                        type: "external",
                                        route: "#",
                                        label: "Let's Go",
                                    }}
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Card>
        </>
    );
}

export default NavContent;