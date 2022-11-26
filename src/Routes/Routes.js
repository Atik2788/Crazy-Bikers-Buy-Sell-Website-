import { createBrowserRouter } from "react-router-dom";
import MyOrders from "../DashboardLayout/BuyeSec/MyOrders";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import AddProducts from "../DashboardLayout/SellerSec/AddProducts";
import NotFound from "../NotFound/NotFound";
import BikesCategory from "../Pages/Home/BikesCategory/BikesCategory";
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
                element: <PrivateRoutes><BikesCategory></BikesCategory></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/bikes/${params.category}`)
            },
        ]
    },
    {
        path: '/dashboardLayout',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboardLayout/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboardLayout/addProducts',
                element: <AddProducts></AddProducts>
            }
        ]
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    }
])