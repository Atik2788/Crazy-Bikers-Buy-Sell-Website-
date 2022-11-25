import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import BikesCategory from "../Pages/Home/BikesCategory/BikesCategory";
import Category from "../Pages/Home/Category";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Blog from "../Pages/Seared/Blog";
import Login from "../Pages/Seared/Login";
import Signup from "../Pages/Seared/Signup";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/bikes/:category',
                element: <BikesCategory></BikesCategory>,
                loader: ({params}) => fetch(`http://localhost:5000/bikes/${params.category}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
])