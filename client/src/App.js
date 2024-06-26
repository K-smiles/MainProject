import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Home from 'pages/home'

// Material Kit 2 React routes
import routes from "routes";
import store from './store'
import DiabeticDetail from 'pages/exercise/detail'
//redux 
import { Provider } from 'react-redux'

export default function App() {

  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {getRoutes(routes)}
          <Route path="/home" element={<Home />} />
          <Route path="/diabetes" element={<Navigate to="/diabetes/type" />} />
          <Route path="/diet" element={<Navigate to="/diet/recipe" />} />
          <Route path="/exercise" element={<Navigate to="/exercise/outline" />} />
          <Route path="/recipe/detail/:id" element={<DiabeticDetail/>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
