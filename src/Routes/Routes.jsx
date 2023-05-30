import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/menu',
            element: <Menu/>
        },
        {
            path: '/order/:category',
            element: <Order/>
        },
        {
          path: '/login',
          element: <Login/>
      },
        {
          path: '/register',
          element: <Register/>
      },
    ],
  },
  {
    path : '/dashboard',
    element : <Dashboard/>,
    children : [
      {
        path : '/',
        element: <Dashboard/>,
        children : [
          
        ]
      }
    ]
  }
]);

export default router;
