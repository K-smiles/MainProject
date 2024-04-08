// @mui material components
import Icon from "@mui/material/Icon";

import Home from "layouts/home"
import About from "layouts/about";
import Disabetes from "layouts/disabetes";
import Disabetes2 from "pages/disabetes2";
import Calculator from "layouts/calculator";


const routes = [
  {
    name: "Home",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/home",
    component: <Home />,
  },
  {
    name: "What is Disabetes ?",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Disabetes",
        collapse: [
          {
            name: "Disabetes",
            route: "/disabetes/1",
            component: <Disabetes />,
          },
          {
            name: "More content",
            route: "/disabetes/2",
            component: <Disabetes2 />,
          },
        ],
      },
    ],
  },
  {
    name: "Risk Calculator",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/calculator",
    component: <Calculator />,
  },
  {
    name: "About",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/about",
    component: <About />,
  },
];

export default routes;
