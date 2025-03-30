import React from 'react';

const Cart = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <p className="mb-4">Here you can review your selected items before proceeding to checkout.</p>
            {/* Cart items will be displayed here */}
            <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-lg">No items in your cart.</p>
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;