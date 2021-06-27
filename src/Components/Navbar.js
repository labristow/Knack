import React from 'react';
import Logo from './logo.png';

function Navbar() {
    const showNavDropdown = () => {
        document.querySelector(".nav_dropdown").classList.toggle("show");
        document.querySelector(".bar1").classList.toggle("bar_1");
        document.querySelector(".bar2").classList.toggle("bar_2");
        document.querySelector(".bar3").classList.toggle("bar_3");
    }
    return (
        <nav className="w-full items-center flex justify-between">
            <a href="/#">
                <img src={Logo} width="200" alt="" />
            </a>
            <h5 className="bar lg:hidden md:hidden" onClick={showNavDropdown}>
                <span className="bar1 block w-6 ml-1 h-1 bg-gray-600"
                ></span>
                <span className="bar2 block w-8 h-1 my-1 bg-gray-600"
                ></span>
                <span className="bar3 block w-6 ml-1 h-1 bg-gray-600"
                ></span>
            </h5>
            <div className="nav_dropdown hidden absolute top-20 left-0 z-20  w-full h-auto bg-blue-600">
                <a href="/#" className="w-full py-3 border border-blue-600 rounded block px-8 text-white border border-gray-100 py-3">Solutions</a>
                <a href="/#" className="font-medium w-full block px-8 text-white border border-gray-100 py-3">Pricing</a>
                <a href="/#" className="font-medium w-full block px-8 text-white border border-gray-100 py-3">About Us</a>
                <a href="/#" className="font-medium w-full block px-8 text-white border border-gray-100 py-3">Contact Us</a>
                <a href="/#" className="w-full px-5 text-white text-sm font-semibold bg-blue-600 rounded block px-8 text-white border border-gray-100 py-3">LOGIN</a>
            </div>
            <div className="lg:flex md:flex items-center hidden">
                <a href="/#" className="w-auto px-6 py-3 border border-blue-600 rounded mx-4">Solutions</a>
                <a href="/#" className="font-medium w-auto mx-4">Pricing</a>
                <a href="/#" className="font-medium w-auto mx-4">About Us</a>
                <a href="/#" className="font-medium w-auto mx-4">Contact Us</a>
                <a href="/#" className="w-auto px-5 py-3 text-white text-sm font-semibold bg-blue-600 rounded mx-4">LOGIN</a>
            </div>
        </nav>
    )
}

export default Navbar
