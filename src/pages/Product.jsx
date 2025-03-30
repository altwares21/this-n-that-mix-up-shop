import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/products";

const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const product = products.find((item) => item.id === parseInt(id)); // Find the product by ID

    if (!product) {
        return <h2 className="text-center text-2xl font-bold mt-8">Product not found</h2>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-xl font-bold text-orange-500 mb-4">${product.price.toFixed(2)}</p>

                {/* Additional Images */}
                {product.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.name} - ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg shadow-lg"
                            />
                        ))}
                    </div>
                )}

                {/* Add to Cart Button */}
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;