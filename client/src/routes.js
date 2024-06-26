// @mui material 
import Icon from "@mui/material/Icon";
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Home from "FirstPage"
import TypeAndSymptom from "pages/diabetes/TypeAndSymptom";
import DiabetesInAus from "pages/diabetes/DiabetesInAus";
import LiveWithDia from "pages/diabetes/LiveWithDia";
import Calculator from "pages/calculator";
import Model3d from "pages/model3d";
import DiabeticMap from "pages/diabetesmap";
import DiabeticRecipe from "pages/diet/recipe";
import DiabeticFood from "pages/diet/food";
import ExercisePage from "pages/exercise/outline"
import DiabeticCalorie from "pages/exercise/calorie"

const routes = [
  {
    name: "Home",
    icon: <Icon >home</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/home",
    prefix: "/home",
    component: <Home />,
  },
  {
    name: "Introduction to Diabetes",
    icon: <Icon>article</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    prefix: "/diabetes",
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
    name: "Model",
    icon: <ThreeDRotationIcon />,
    columns: 1,
    rowsPerColumn: 2,
    route: "/model",
    prefix: "/model",
    component: <Model3d />,
  },
  {
    name: "Risk Calculator",
    icon: <Icon>devices</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/calculator",
    prefix: "/calculator",
    component: <Calculator />,
  },
  {
    name: "Map",
    icon: <Icon>map</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/map",
    prefix: "/map",
    component: <DiabeticMap />,
  },
  {
    name: "Diet",
    icon: <FoodBankIcon />,
    columns: 1,
    rowsPerColumn: 2,
    prefix: "/diet",
    collapse: [
      {
        collapse: [
          {
            name: "Recipe",
            route: "/diet/recipe",
            component: <DiabeticRecipe />,
          },
          {
            name: "Food",
            route: "/diet/food",
            component: <DiabeticFood />,
          }
        ],
      },
    ],
  },
  {
    name: "Exercise",
    icon: <SportsBasketballIcon />,
    columns: 1,
    rowsPerColumn: 2,
    prefix: "/exercise",
    collapse: [
      {
        collapse: [
          {
            name: "Exercise Advice",
            route: "/exercise/outline",
            component: <ExercisePage />,
          },
          {
            name: "Exercise Plan",
            route: "/exercise/calorie",
            component: <DiabeticCalorie />,
          }
        ],
      },
    ],
  },
];

export default routes;
