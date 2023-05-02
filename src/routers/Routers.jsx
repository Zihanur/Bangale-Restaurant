import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register"
import Terms from "../pages/Terms/Terms";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/chefs')
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
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/terms',
        element:<Terms></Terms>
      }
    ]
  },
]);

export default router;