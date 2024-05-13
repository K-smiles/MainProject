import React from "react";
import PropTypes from "prop-types";

// @mui material components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultInfoCard({ color, icon, title, description, direction, small }) {
  return (
    <MKBox lineHeight={1} p={direction === "center" ? 2 : 0} textAlign={direction}>
      <MKTypography
        display="block"
        variant={direction === "center" ? "h1" : "h2"}
        color={color}
        textGradient
      >
        {icon} {/* Render the icon directly */}
      </MKTypography>
      <MKTypography
        display="block"
        variant="h4"
        fontWeight="bold"
        mt={direction === "center" ? 1 : 2}
        mb={0.2}
      >
        {title}
      </MKTypography>
      <MKTypography
        display="block"
        variant={small ? "button" : "body1"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
      >
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Prop types for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary", "secondary", "info", "success", "warning", "error", "light", "dark"
  ]),
  icon: PropTypes.node.isRequired, // Ensure that icon can accept any valid React node
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};

export default DefaultInfoCard;
