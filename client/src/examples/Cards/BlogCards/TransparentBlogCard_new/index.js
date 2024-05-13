import React from "react";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TransparentBlogCard({ image, title, description }) {
  const imageTemplate = (
    <MKBox position="relative" borderRadius="lg">
      <MKBox
        component="img"
        src={image}
        borderRadius="lg"
        shadow="md"
        width="100%"
        position="relative"
        zIndex={1}
      />
      <MKBox
        borderRadius="lg"
        shadow="md"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={{
          backgroundImage: `url(${image})`,
          transform: "scale(0.94)",
          filter: "blur(12px)",
          backgroundSize: "cover",
        }}
      />
    </MKBox>
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {imageTemplate}
      <MKBox pt={2} pb={3}>
        <MKTypography variant="h5" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body1" component="p" color="text" mb={6}>
          {description}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TransparentBlogCard;
