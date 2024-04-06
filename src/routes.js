// @mui material components
import Icon from "@mui/material/Icon";

import Home from "layouts/home"
import About from "layouts/about";
import Disabetes from "layouts/disabetes";
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
    route: "/disabetes",
    component: <Disabetes />,
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
