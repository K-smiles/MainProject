import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BackgroundBlogCard({ image, title, description, action }) {
  
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundImage: ({ palette: { black }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MKBox p={3} flex={{ md: "1 0 50%" }}>
        <MKTypography variant="h1" color="white" mb={1}>
          {title}
        </MKTypography>
        <MKTypography variant="h4" color="white" my={3}>
          {description}
        </MKTypography>
      </MKBox>
      <MKBox p={3} flex={{ md: "1 0 50%" }}>
        {action && (
          action.type === "internal" ? (
            <MKTypography component={Link} to={action.route} variant="body1" fontWeight="regular" color="white" textTransform="capitalize">
              {action.label}
              <Icon>arrow_forward</Icon>
            </MKTypography>
          ) : (
            <MKTypography component={MuiLink} href={action.route} target="_blank" rel="noreferrer" variant="body2" fontWeight="regular" color="white" textTransform="capitalize">
              {action.label}
              <Icon>arrow_forward</Icon>
            </MKTypography>
          )
        )}
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
