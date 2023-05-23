import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layouts/Main";
  import "./index.css";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        
      ]
    },
  ]);

  export default router