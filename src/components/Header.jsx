import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Import the logo

const Header = () => {
    return (
        <header className="bg-orange-500 text-white sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="This N That Mix Up Shop Logo" className="h-10" />
                </Link>

                {/* Navigation */}
                <nav className="flex items-center space-x-6">
                    {/* Home Link */}
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>

                    {/* Shop Dropdown */}
                    <div className="relative group">
                        <button className="hover:underline focus:outline-none">
                            Shop
                        </button>
                        <div className="absolute left-0 mt-2 hidden bg-white text-black shadow-lg rounded w-40 group-hover:flex flex-col">
                            <Link
                                to="/apparel"
                                className="block px-4 py-2 hover:bg-gray-200"
                            >
                                Apparel
                            </Link>
                            <Link
                                to="/accessories"
                                className="block px-4 py-2 hover:bg-gray-200"
                            >
                                Accessories
                            </Link>
                            <Link
                                to="/figures"
                                className="block px-4 py-2 hover:bg-gray-200"
                            >
                                Figures
                            </Link>
                        </div>
                    </div>

                    {/* About Us */}
                    <Link to="/about-us" className="hover:underline">
                        About Us
                    </Link>

                    {/* Cart */}
                    <Link to="/cart" className="hover:underline">
                        Cart
                    </Link>
                </nav>

                {/* Search Bar */}
                <div className="relative w-full mt-4 sm:mt-0 sm:w-auto">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full sm:w-64 px-4 py-2 rounded-full text-black focus:outline-none"
                    />
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black">
                        🔍
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;