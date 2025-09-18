// src/AppRoutes.js
import { useRoutes } from "react-router-dom";
import Home from "../pages/landing";
import About_us from "../pages/quick_links/about_us";
import Contact from "../pages/contact";
import Resume from "../pages/resume";
import Service from "../pages/service";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <About_us /> },
    { path: "/resume", element: <Resume /> },
    { path: "/service", element: <Service /> },

    { path: "/contact-us", element: <Contact /> },
  ]);
  return routes;
};

export default AppRoutes;
