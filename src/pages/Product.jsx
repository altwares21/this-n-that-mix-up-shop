import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { Carousel } from "react-responsive-carousel";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import products from "../assets/products";

const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null); // State to hold the product data
    const [loading, setLoading] = useState(true); // State to track loading
    const [selectedSize, setSelectedSize] = useState(""); // State to track selected size
    const [quantity, setQuantity] = useState(1); // State to track quantity
    const dispatch = useDispatch();

    useEffect(() => {
        // Show toast notification
        toast.info("Gathering product information...");

        // Simulate data fetching
        const timeout = setTimeout(() => {
            const foundProduct = products.find((item) => item.id === parseInt(id));
            setProduct(foundProduct);
            setLoading(false); // Stop loading once the product is fetched
        }, 1000); // Simulate a 1-second delay

        return () => clearTimeout(timeout); // Cleanup timeout
    }, [id]);

    const handleAddToCart = () => {
        if (product.category === "Apparel" || product.category === "Dry Fit") {
            if (!selectedSize) {
                toast.error("Please select a size before adding to cart.");
                return;
            }
        }

        if (quantity < 1) {
            toast.error("Quantity must be at least 1.");
            return;
        }

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0], // Include the first image of the product
            ...(product.category === "Apparel" || product.category === "Dry Fit" ? { size: selectedSize } : {}), // Add size only if applicable
            quantity: quantity,
        };

        dispatch(addToCart(cartItem)); // Dispatch the action to add the item to the cart
        toast.success("Product added to cart!");
    };

    if (loading) {
        // Show skeleton loader while loading
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
                <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
                    <Skeleton height={400} className="mb-4" /> {/* Skeleton for main image */}
                    <Skeleton width="60%" height={32} className="mb-2" /> {/* Skeleton for title */}
                    <Skeleton width="80%" height={24} className="mb-4" /> {/* Skeleton for description */}
                    <Skeleton width="40%" height={28} className="mb-4" /> {/* Skeleton for price */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <Skeleton height={128} /> {/* Skeleton for additional images */}
                        <Skeleton height={128} />
                        <Skeleton height={128} />
                    </div>
                    <Skeleton width="50%" height={40} /> {/* Skeleton for button */}
                </div>
            </div>
        );
    }

    if (!product) {
        return <h2 className="text-center text-2xl font-bold mt-8">Product not found</h2>;
    }

    // Define sizes for Apparel and Dry Fit products
    const sizes =
        product.category === "Apparel"
            ? ["Small", "Medium", "Large", "XL", "2XL", "3XL"]
            : product.category === "Dry Fit"
            ? ["XS", "Small", "Medium", "Large", "XL", "2XL", "3XL", "4XL", "5XL"]
            : [];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
                {/* Image Carousel */}
                <Carousel
                    showThumbs={true}
                    infiniteLoop={true}
                    showStatus={false}
                    dynamicHeight={false}
                    thumbWidth={100} // Set thumbnail width
                    renderThumbs={() =>
                        product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="h-[100px] object-cover rounded-lg" // Thumbnail height
                            />
                        ))
                    }
                >
                    {product.images.map((image, index) => (
                        <div key={index}>
                            {/* Main Image */}
                            <img
                                src={image}
                                alt={`${product.name} - ${index + 1}`}
                                className="w-full h-[400px] object-contain rounded-lg" // Main image height
                            />
                        </div>
                    ))}
                </Carousel>

                {/* Product Details */}
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-xl font-bold text-orange-500 mb-4">${product.price.toFixed(2)}</p>

                {/* Size Selector */}
                {sizes.length > 0 && (
                    <div className="mb-4">
                        <label className="block text-lg font-bold mb-2">Select Size:</label>
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        >
                            <option value="">-- Select a Size --</option>
                            {sizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Quantity Selector */}
                <div className="mb-4">
                    <label className="block text-lg font-bold mb-2">Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full border border-gray-300 rounded-lg p-2"
                        min="1"
                    />
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;