import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import products from '../assets/products'; // Adjust the path if necessary

const Figures = () => {
    // Filter products by category
    const figures = products.filter((product) => product.category === "Figures");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            {/* Figures Section */}
            <section className="mb-8">
                <div className="w-full max-w-4xl px-4 mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Figures</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4"> {/* 2 columns on small screens, 3 on medium */}
                        {figures.map((product) => (
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

export default Figures;