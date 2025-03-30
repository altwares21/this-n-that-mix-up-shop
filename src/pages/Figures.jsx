import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import products from '../assets/products'; // Adjust the path if necessary

const Figures = () => {
    // Filter products by category
    const figures = products.filter((product) => product.category === "Figures");

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Figures</h1>
            <p className="text-lg text-center mb-4">
                Explore our collection of figures that bring your favorite characters to life. 
                From action figures to collectibles, we have something for every fan!
            </p>

            {/* Figures Section */}
            <section>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {figures.map((product) => (
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

export default Figures;