import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary p-2 w-full mt-auto">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <a href="#" className="text-white text-xs px-1 hover:bg-blue-700 rounded">Privacy</a>
                <a href="#" className="text-white text-xs px-1 hover:bg-blue-700 rounded">Cookies</a>
                <a href="#" className="text-white text-xs px-1 hover:bg-blue-700 rounded">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;
