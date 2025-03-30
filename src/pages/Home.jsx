import React from 'react';
import { Link } from 'react-router-dom';
import products from '../assets/products';
import apparelImage from '../assets/products/Apparel/hxh-tee.jpg';
import accessoriesImage from '../assets/products/Keychains/goku-keychain.jpg';
import figuresImage from '../assets/products/Figures/luffy-funko.jpg';

const Home = () => {
    // Filter the products array to include specific products
    const selectedApparelProducts = products.filter((product) =>
        [1, 9, 26].includes(product.id) // Replace these IDs with the ones you want to display
    );
    const selectedAccessoriesProducts = products.filter((product) =>
        [64, 52, 90].includes(product.id) // 1 product from Mugs, Keychains, and Necklaces
    );
    const selectedFiguresProducts = products.filter((product) =>
        [42, 43, 44].includes(product.id) // 3 products from Figures
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            {/* Section Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl px-4 mt-8">
                {/* Apparel Section */}
                <Link to="/apparel" className="relative group">
                    <div className="relative w-40 h-40 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                            <span className="text-white text-lg font-bold">Apparel</span>
                        </div>
                        <img
                            src={apparelImage}
                            alt="Apparel"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </Link>

                {/* Accessories Section */}
                <Link to="/accessories" className="relative group">
                    <div className="relative w-40 h-40 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                            <span className="text-white text-lg font-bold">Accessories</span>
                        </div>
                        <img
                            src={accessoriesImage}
                            alt="Accessories"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </Link>

                {/* Figures Section */}
                <Link to="/figures" className="relative group">
                    <div className="relative w-40 h-40 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                            <span className="text-white text-lg font-bold">Figures</span>
                        </div>
                        <img
                            src={figuresImage}
                            alt="Figures"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </Link>
            </div>

            {/* Apparel Product Links */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Apparel</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedApparelProducts.map((product) => (
                        <Link
                            to={`/product/${product.id}`} // Dynamic link to Product.jsx
                            key={product.id}
                            className="relative group"
                        >
                            <div className="relative w-full h-64 mx-auto">
                                <img
                                    src={product.images[0]} // Use the first image from the product
                                    alt={product.name}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                                <div className="text-center mt-2">
                                    <span className="text-lg font-bold">{product.name}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Accessories Product Links */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Accessories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedAccessoriesProducts.map((product) => (
                        <Link
                            to={`/product/${product.id}`} // Dynamic link to Product.jsx
                            key={product.id}
                            className="relative group"
                        >
                            <div className="relative w-full h-64 mx-auto">
                                <img
                                    src={product.images[0]} // Use the first image from the product
                                    alt={product.name}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                                <div className="text-center mt-2">
                                    <span className="text-lg font-bold">{product.name}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Figures Product Links */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Figures</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedFiguresProducts.map((product) => (
                        <Link
                            to={`/product/${product.id}`} // Dynamic link to Product.jsx
                            key={product.id}
                            className="relative group"
                        >
                            <div className="relative w-full h-64 mx-auto">
                                <img
                                    src={product.images[0]} // Use the first image from the product
                                    alt={product.name}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                                <div className="text-center mt-2">
                                    <span className="text-lg font-bold">{product.name}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Home;