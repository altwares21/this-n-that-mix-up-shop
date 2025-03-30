import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-4 mt-12">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} LAFA Digital Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;