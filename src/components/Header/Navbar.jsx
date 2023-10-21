/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
  


    const hundleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('You are logged out')
            })
            .catch(error => {

            })
    }

    const navLinks = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " font-bold" : ""
            }
        >
            Home
        </NavLink></li>

        <li><NavLink
            to="/addproduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold" : ""
            }
        >
            Add Product
        </NavLink></li>

        <li><NavLink
            to="/mycart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold" : ""
            }
        >
            My Cart
        </NavLink></li>

        <li><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold" : ""
            }
        >
            Login
        </NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-12" src="https://i.ibb.co/QFNDK08/Pngtree-car-silhouette-logo-4783000.png" alt="" />
                        <a href="" className="text-xl font-semibold"><em>BARCHETTA</em></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <DarkThemeToggle />
                    {
                        user ?
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center">
                                    <p>{user.displayName}</p>
                                    <p>{user.email}</p>
                                </div>
                                <button onClick={hundleSignOut} className="btn bg-black rounded-lg text-white font-semibold hover:bg-slate-600">Log Out</button>
                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn bg-black rounded-lg text-white font-semibold hover:bg-slate-600">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;