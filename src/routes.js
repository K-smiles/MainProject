// @mui material components
import Icon from "@mui/material/Icon";
import Home from "layouts/home"
import About from "layouts/about";
import Disabetes from "layouts/disabetes";
import Disabetes2 from "pages/disabetes2";
import Disabetes3 from "pages/disabetes3";
import Calculator from "layouts/calculator";
import Model3d from "pages/model3d";

const routes = [
  {
    name: "Home",
    icon: <Icon >home</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/home",
    component: <Home />,
  },
  {
    name: "Introduction to Diabetes",
    icon: <Icon>article</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Diabetes",
        collapse: [
          {
            name: "Diabetes: Types & Symptoms",
            route: "/disabetes/1",
            component: <Disabetes />,
          },
          {
            name: "Diabetes in Aussie",
            route: "/disabetes/2",
            component: <Disabetes2 />,
          },
          {
            name: "Living with diabetes",
            route: "/disabetes/3",
            component: <Disabetes3 />,
          },
        ],
      },
    ],
  },
  {
    name: "Risk Calculator",
    icon: <Icon>devices</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/calculator",
    component: <Calculator />,
  },
  {
    name: "3D",
    icon: <Icon>devices</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/model",
    component: <Model3d />,
  },
  // {
  //   name: "About",
  //   icon: <Icon>dashboard</Icon>,
  //   columns: 1,
  //   rowsPerColumn: 2,
  //   route: "/about",
  //   component: <About />,
  // },
];

export default routes;
