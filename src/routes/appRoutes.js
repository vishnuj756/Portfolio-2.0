// src/AppRoutes.js
import { useRoutes } from "react-router-dom";
import Home from "../pages/landing";
import About_us from "../pages/quick_links/about_us";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";




const AppRoutes = () => {
  let routes = useRoutes([
    
    {path:'/',element:<Home/>},
    {path:'/about-us',element:<About_us/>},
    {path:'/portfolio',element:<Portfolio/>},
    {path:'/contact-us',element:<Contact/>}


  ]);
  return routes;
};

export default AppRoutes;