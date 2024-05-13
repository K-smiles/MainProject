/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ color, count, title, description, ...rest }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1} {...rest}>
      <MKTypography variant="h1" color={color} textGradient>
        {count && (
          <MKTypography variant="h1" mt={2} mb={1}>
            {count}
          </MKTypography>
        )}
      </MKTypography>
      {title && (
        <MKTypography variant="h3" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography
          variant="h5"
          sx={{
            color: "#919191",
          }}
        >
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
