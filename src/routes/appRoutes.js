// src/AppRoutes.js
import { useRoutes } from "react-router-dom";
import Home from "../pages/landing";




const AppRoutes = () => {
  let routes = useRoutes([
    
    {path:'/',element:<Home/>}


  ]);
  return routes;
};

export default AppRoutes;