// @mui material components
import Icon from "@mui/material/Icon";


import Home from "FirstPage"
import TypeAndSymptom from "pages/diabetes/TypeAndSymptom";
import DiabetesInAus from "pages/diabetes/DiabetesInAus";
import LiveWithDia from "pages/diabetes/LiveWithDia";
import Calculator from "pages/calculator";
import Model3d from "pages/model3d";
import DiabeticMap from "pages/diabetesmap";

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
            route: "/diabetes/type",
            component: <TypeAndSymptom />,
          },
          {
            name: "Diabetes in Aussie",
            route: "/diabetes/diabetesinaus",
            component: <DiabetesInAus />,
          },
          {
            name: "Living with diabetes",
            route: "/diabetes/livewithdia",
            component: <LiveWithDia />,
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
  {
    name: "Map",
    icon: <Icon>map</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/map",
    component: <DiabeticMap />,
  },
];

export default routes;
