import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore, FaUserCircle } from "react-icons/fa";
import { IoIosClose ,IoIosMenu } from "react-icons/io"
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";

const Navbar = () => {

    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector( (state) => state.carts );
    const { user } = useSelector( (state) => state.auth );

    return (
        <div className="h-[80px] bg-custom-gradient relative top-0 flex items-center text-white z-50 ">
            <div className="lg:px-14 sm:px-8 px-4 py-5 w-full flex justify-between">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <FaStore className="mr-2 text-3xl" />
                    <span className="text-[poppins] ">E-Shop</span>
                </Link>

                <ul className={`flex sm:gap-10 gap-4 sm:items-center text-slate-800 sm:static absolute left-0 top-[80px] sm:shadow-none shadow-md ${
                    navbarOpen ? "h-auto sm:pb-0 pb-5" : "h-0 overflow-hidden"
                 } transition-all duration-300 sm:h-fit sm:bg-none bg-custom-gradient text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}>
                    <li className="font-[500] transition-all duration-150">
                        <Link to="/" className={
                            path === "/" ? "text-white text-xl font-semibold" : "text-gray-300 text-xl hover:text-white"
                        }>Home</Link>
                    </li>
                    <li className="font-[500] text-xl transition-all duration-150">
                        <Link to="/products" className={
                            path === "/products" ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                        }>products</Link>
                    </li>
                    <li className="font-[500] text-xl transition-all duration-150">
                        <Link to="/about" className={
                            path === "/about" ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                        }>about</Link>
                    </li>
                    <li className="font-[500] text-xl transition-all duration-150">
                        <Link to="/contact" className={
                            path === "/contact" ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                        }>contact</Link>
                    </li>
                    <li className="font-[500] text-xl transition-all duration-150">
                        <Link to="/cart" className={
                            path === "/cart" ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                        }>
                            <Badge 
                                showZero
                                badgeContent={cart?.length || 0}
                                color="primary"
                                overlap="circular" 
                                anchorOrigin = {{vertical:'top', horizontal: 'right' }}>
                                    <FaShoppingCart size={25} />
                            </Badge>
                        </Link>
                    </li>

                  {(user && user.id) ? (
                    <li className="font-[500] text-xl transition-all duration-150">
                        <UserMenu />
                    </li>
                  ):(

                    <li className="font-[500] text-xl transition-all duration-150">
                        <Link to="/login" className="flex items-center space-x-2 px-4 py-[6px] 
                        bg-gradient-to-r from-purple-600 to-red-500
                        text-white font-semibold rounded-md shadow-lg 
                        hover:from-purple-500 hover:to-red-400 transition
                        duration-300 ease-in-out transform">
                            <FaSignInAlt size={20} />
                            <span>login</span>
                        </Link>
                    </li>
                    )}
                </ul>
                <button onClick={() => setNavbarOpen(!navbarOpen)}
                    className="sm:hidden flex items-center sm:mt-0 mt-2">
                        { navbarOpen ? (
                           <IoIosClose className="text-white text-3xl" />
                        ) :(
                            <IoIosMenu className="text-white text-3xl" />
                        )}
                    </button>
            </div>
        </div>
    )
}

export default Navbar;
