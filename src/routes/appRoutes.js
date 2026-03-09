// src/AppRoutes.js
import { useRoutes } from "react-router-dom";
import Home from "../pages/landing";
import Contact from "../pages/contact";
import Resume from "../pages/resume";
import Service from "../pages/service";
import About from "../pages/about us";
import Portfolio from "../pages/portfolio";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <About /> },
    { path: "/resume", element: <Resume /> },
    { path: "/service", element: <Service /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/contact-us", element: <Contact /> },
  ]);
  return routes;
};

export default AppRoutes;
