// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/team.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "DiabeticGuardian",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
  ],
  menus: [
    {
      name: "Team",
      items: [
        { name: "about us", href: "/about" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "" },
        { name: "sponsorships", href: "" },
      ],
    },
    {
      name: "",
      items: [

      ],
    },
    {
      name: "",
      items: [

      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}  by{" "}
      .
    </MKTypography>
  ),
};
