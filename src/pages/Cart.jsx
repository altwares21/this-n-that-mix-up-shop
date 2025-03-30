import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../slices/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart); // Access the cart state
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="mb-4">
                            <img
                                src={item.image} // Use the first image from the product
                                alt={item.name}
                                className="w-32 h-32 object-cover rounded-lg mb-2"
                            />
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            {item.size && <p>Size: {item.size}</p>} {/* Only show size if it exists */}
                            <p>Quantity: {item.quantity}</p>
                            <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={handleClearCart}
                        className="bg-gray-500 text-white px-6 py-2 rounded-lg mt-4"
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;