// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/examples/epic1.jpg";
import post2 from "assets/images/examples/epic2.jpg";
import post4 from "assets/images/examples/epic4.jpg";
import post5 from "assets/images/examples/epic5.jpg";
import post6 from "assets/images/examples/meal_plan.jpg";
import post7 from "assets/images/examples/exercise_epic.jpg";
function Features() {

    return (
        <MKBox component="section" py={2}>
            <Container>
                <Grid container item xs={12} lg={6}>
                    <MKTypography variant="h3" mb={6} style={{ fontSize: "3rem" }}>
                        What can we provide
                    </MKTypography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post1}
                            title={<span style={{ fontSize: "2rem" }}>Diabetes Introduction</span>}
                            description="Discover the essentials of diabetes, 
                            from its basic definition to understanding its various types and how it affects your health"
                            action={{
                                type: "internal",
                                route: "/diabetes/type",
                                color: "info",
                                label: "read more",
                            }}
                            style={{ fontSize: "5rem" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post2}
                            title={<span style={{ fontSize: "2rem" }}>Diabetes risk calculator</span>}
                            description={(
                                <>
                                    Quickly assess your risk for diabetes with our simple questionnaire and receive personalized results to help guide your health decisions.
                                    <br />
                                </>
                            )}
                            action={{
                                type: "internal",
                                route: "/calculator",
                                color: "info",
                                label: "read more",
                            }}
                            style={{ fontSize: "5rem" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post4}
                            title={<span style={{ fontSize: "2rem" }}>Hospitals and GPs</span>}
                            description={(
                                <>
                                    Quickly find hospitals and all nearby GPs.
                                    <br />
                                    <br />
                                    <br />
                                </>
                            )}
                            action={{
                                type: "internal",
                                route: "/map",
                                color: "info",
                                label: "read more",
                            }}
                            style={{ fontSize: "5rem" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post5}
                            title={<span style={{ fontSize: "2rem" }}>3D Interactive Mannequin</span>}
                            description={(
                                <>
                                    Understanding what different stages of diabetes can do to your body
                                    <br />
                                    <br />
                                </>
                            )}
                            action={{
                                type: "internal",
                                route: "/model",
                                color: "info",
                                label: "read more",
                            }}
                            style={{ fontSize: "5rem" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post6}
                            title={<span style={{ fontSize: "2rem" }}>Healthy meals</span>}
                            description={(
                                <>
                                    we provide nutritionally balanced recipes and food identification
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </>
                            )}
                            action={{
                                type: "internal",
                                route: "/model",
                                color: "info",
                                label: "read more",
                            }}
                            style={{ fontSize: "5rem" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} lg={4}>
                        <TransparentBlogCard
                            image={post7}
                            title={<span style={{ fontSize: "2rem" }}>Exercise guide</span>}
                            description={(
                                <>
                                    we help you find the best exercise for you
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </>
                            )}
                            action={{
                                type: "internal",
                                route: "/exercise",
                                color: "info",
                                label: "read more",
                            }}
                            style={{ fontSize: "5rem" }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Features;