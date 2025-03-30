import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import products from '../assets/products'; // Adjust the path if necessary

const Apparel = () => {
    // Filter products by category
    const apparelProducts = products.filter((product) => product.category === "Apparel");
    const dryFitProducts = products.filter((product) => product.category === "Dry Fit");

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Apparel</h1>
            <p className="mb-4 text-center">Explore our wide range of apparel, including t-shirts, hoodies, and more!</p>

            {/* Apparel Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Apparel</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {apparelProducts.map((product) => (
                        <div key={product.id} className="border rounded shadow text-center">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-48 object-contain mb-2"
                                />
                            </Link>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dry Fit Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-center">Dry Fit</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {dryFitProducts.map((product) => (
                        <div key={product.id} className="border rounded shadow text-center">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-48 object-contain mb-2"
                                />
                            </Link>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Apparel;