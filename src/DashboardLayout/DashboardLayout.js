import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Seared/Footer';
import Navbar from '../Pages/Seared/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>


            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-80 w-40 bg-slate-600 lg:bg-white text-base-content">
                        <li><Link to='/dashboardLayout/myOrders'>My Orders</Link></li>
                        <li><Link to='/dashboardLayout/addProducts'>Add Product</Link></li>
                        <li><Link to='/dashboardLayout/myproducts'>My Products</Link></li>
                        <li><Link to='/dashboardLayout/allSellers'>All Sellers</Link></li>
                        <li><Link to='/dashboardLayout/allBuyers'>All Buyers</Link></li>
                    </ul>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;