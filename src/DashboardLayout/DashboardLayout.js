import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Seared/Footer';
import Navbar from '../Pages/Seared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

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

                        {!isSeller && !isAdmin &&
                            <li><Link to='/dashboardLayout'>My Orders</Link></li>
                        }


                        {isSeller &&
                            <>
                                <li><Link to='/dashboardLayout/addProducts'>Add Product</Link></li>
                                <li><Link to='/dashboardLayout/myproducts'>My Products</Link></li>
                            </>
                        }


                        {isAdmin &&
                            <>
                                <li><Link to='/dashboardLayout/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboardLayout/allBuyers'>All Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;