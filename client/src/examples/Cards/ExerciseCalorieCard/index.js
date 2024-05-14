import React from "react"; // 引入React
import PropTypes from "prop-types"; // 引入prop-types库用于类型检查
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Image } from 'antd';
import { Container, Grid } from "@mui/material";
import calorieImage from "assets/images/calorie/calories.png"
import burgerImage from "assets/images/calorie/hamburger.png"
function BackgroundBlogCard({ title, image, met, weight, time }) {
  return (
    <Card
      sx={{
        backgroundImage: ({ palette: { black }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <MKBox p={3}>
        <MKBox minHeight="20.625rem" my="auto" direction="column"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <MKTypography variant="h2" color="white" mb={1}>
            {title}
          </MKTypography>
          <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <MKTypography variant="body1" color="white" >
                You burned
                <MKTypography variant="h2"  color="info">{Math.floor(time/60 * met * weight)} </MKTypography>
              </MKTypography>
              <Image
                width={200}
                src={calorieImage} />
            </Grid>
            <Grid xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <MKTypography variant="body1" color="white">
                It is equal to <MKTypography variant="h2" color="info"> {Math.floor(time / 60 * met * weight / 300)} </MKTypography>
              </MKTypography>
              <Image
                width={200}
                src={burgerImage}
              />
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </Card>
  );
}

BackgroundBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default BackgroundBlogCard;
