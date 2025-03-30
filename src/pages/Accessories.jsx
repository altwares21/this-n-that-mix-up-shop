import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import products from '../assets/products'; // Adjust the path if necessary

const Accessories = () => {
    // Filter products by categories
    const keychains = products.filter((product) => product.category === "Keychains");
    const mugs = products.filter((product) => product.category === "Mugs");
    const necklaces = products.filter((product) => product.category === "Necklaces");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-center">Accessories</h1>
            <p className="mb-4 text-center">
                Explore our wide range of accessories that complement your style and enhance your look.
                From keychains to mugs and necklaces, we have something for everyone!
            </p>

            {/* Keychains Section */}
            <section className="mb-8">
                <div className="w-full max-w-4xl px-4 mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Keychains</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4"> {/* 2 columns on small screens, 3 on medium */}
                        {keychains.map((product) => (
                            <div key={product.id} className="relative group">
                                <Link to={`/product/${product.id}`}>
                                    <div className="relative w-full h-64 mx-auto"> {/* Fixed square dimensions */}
                                        <img
                                            src={product.images[0]} // Use the first image from the product
                                            alt={product.name}
                                            className="w-full h-full object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                </Link>
                                <div className="text-center mt-2">
                                    <span className="text-lg font-bold">{product.name}</span>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mugs Section */}
            <section className="mb-8">
                <div className="w-full max-w-4xl px-4 mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Mugs</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4"> {/* 2 columns on small screens, 3 on medium */}
                        {mugs.map((product) => (
                            <div key={product.id} className="relative group">
                                <Link to={`/product/${product.id}`}>
                                    <div className="relative w-full h-64 mx-auto"> {/* Fixed square dimensions */}
                                        <img
                                            src={product.images[0]} // Use the first image from the product
                                            alt={product.name}
                                            className="w-full h-full object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                </Link>
                                <div className="text-center mt-2">
                                    <span className="text-lg font-bold">{product.name}</span>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Necklaces Section */}
            <section className="mb-8">
                <div className="w-full max-w-4xl px-4 mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Necklaces</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4"> {/* 2 columns on small screens, 3 on medium */}
                        {necklaces.map((product) => (
                            <div key={product.id} className="relative group">
                                <Link to={`/product/${product.id}`}>
                                    <div className="relative w-full h-64 mx-auto"> {/* Fixed square dimensions */}
                                        <img
                                            src={product.images[0]} // Use the first image from the product
                                            alt={product.name}
                                            className="w-full h-full object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                </Link>
                                <div className="text-center mt-2">
                                    <span className="text-lg font-bold">{product.name}</span>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accessories;