import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/profile',
        element:<Profile></Profile>
      },
      {
        path: '/login',
        element:<Login></Login>
      }
    ]
  },
]);

export default router;