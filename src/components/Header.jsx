import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let navDiolog = document.getElementById("navDiolog");
    function navHandler() {
        navDiolog.classList.toggle('hidden');
    }
    // hidding the Links when visit via mobile
    function menu_item() {
        navDiolog.classList.toggle('hidden');
    }
    return(
        <>
            <header className="sticky top-0 z-50">
                <nav className="p-3 flex justify-between bg-white items-center sticky top-0 shadow-lg z-50">
                    <Link to="" id="brand" className="flex items-center gap-2">
                        <img src="/logo-1-02.png" className="h-10 w-auto" alt="logo" />
                    </Link>
                    <div id="navbar" className="gap-6 hidden lg:flex">
                        <Link className="hover:text-[#3955E5] font-poppins font-medium" to="/">Home</Link>
                        <Link className="hover:text-[#3955E5] font-poppins font-medium" to="/PropertyListing">Property Listing</Link>
                        <Link className="hover:text-[#3955E5] font-poppins font-medium" to="/ContactUs">Contact Us</Link>
                    </div>
                    <button className="hidden lg:flex items-center gap-2 border border-gray-300 hover:border-gray-500 px-6 py-2 rounded-lg">
                        <i className="fa-solid fa-right-to-bracket text-[#3955E5]"></i>
                            <span>Login</span>
                    </button>

                    <button id="nav_handler" onClick={navHandler} className="lg:hidden">
                        <i className="fa-solid fa-bars text-gray-600 text-3xl"></i>
                    </button>
                    <div id="navDiolog" className="hidden fixed z-10 lg:hidden inset-0 p-3 bg-white">
                        <div id="nav-bar" className="flex justify-between items-center ">
                            <Link  id="brand" className="flex items-center gap-2">
                                <img src="./assets/logo-1-02.png" className="h-10 w-auto" alt="logo" />
                            </Link>
                            <button id="nav_handler" onClick={navHandler} className="lg:hidden">
                                <i className="fa-solid fa-xmark text-gray-600 text-3xl"></i>
                            </button>
                            
                        </div>
                        <div className="mt-6">
                            <Link href=""></Link>
                            <Link onClick={menu_item} className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg" to="/">Home</Link>
                            <Link onClick={menu_item} className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg" to="/PropertyListing">property Listing</Link>
                            <Link onClick={menu_item} className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg" to="/ContactUs">Contact Us</Link>
                        </div>
                        <div className="h-[1px] bg-gray-300"></div>
                        <button className="w-full flex mt-6 items-center gap-2  hover:bg-gray-50 px-6 py-2 rounded-lg">
                            <i className="fa-solid fa-right-to-bracket text-[#3955E5]"></i>
                            <span>Login</span>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;