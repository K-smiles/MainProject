import React from "react"; // 引入React
import { Link } from "react-router-dom"; // 引入React Router的Link组件
import PropTypes from "prop-types"; // 引入prop-types库用于类型检查
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BackgroundBlogCard({ image, title, description, action }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",
    "& .material-icons, .material-icons-round": {
      transform: "translateX(2px)",
      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
    },
    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round": {
      transform: "translateX(6px)",
    },
  };

  return (
    <Card
      sx={{
        backgroundImage: ({ palette: { black }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <MKBox p={3}>
        <MKBox minHeight="20.625rem" my="auto">
          <MKTypography variant="h2" color="white" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body1" color="white" my={3}>
            {description}
          </MKTypography>
          {action && ( 
            action.type === "internal" ? (
              <MKTypography component={Link} to={action.route} variant="body1" fontWeight="regular" color="white" textTransform="capitalize" sx={cardActionStyles}>
                {action.label}
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            ) : (
              <MKTypography component={MuiLink} href={action.route} target="_blank" rel="noreferrer" variant="body2" fontWeight="regular" color="white" textTransform="capitalize" sx={cardActionStyles}>
                {action.label}
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            )
          )}
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
  }), // action变成了可选项
};

export default BackgroundBlogCard;
