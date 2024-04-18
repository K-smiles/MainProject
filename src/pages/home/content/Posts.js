// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/examples/epic1.jpg";
import post2 from "assets/images/examples/epic2.jpg";
import post3 from "assets/images/examples/epic3.jpg";

function Posts() {
    
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
                            description="Quickly assess your risk for diabetes with our simple 
                            questionnaire and receive personalized results to help guide your health decisions."
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
                            image={post3}
                            title={<span style={{ fontSize: "2rem" }}>More functions</span>}
                            description={(
                                <>
                                    More functions, the project team is still working hard to develop, please look forward to
                                    <br />
                                    <br />
                                </>
                            )}
                            action={{
                                type: "internal",
                                route: "/#",
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

export default Posts;