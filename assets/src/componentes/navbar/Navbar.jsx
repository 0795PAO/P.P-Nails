import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-pink-100 flex justify-center items-center py-4">
            <div className="space-x-12 text-black font-semibold">
                <a href="#acerca" className="hover:text-pink-500 no-underline">ACERCA DE</a>
                <a href="#servicios" className="hover:text-pink-500 no-underline">SERVICIOS</a>
                <a href="#galeria" className="hover:text-pink-500 no-underline">GALERÍA</a>
                <a href="#contacto" className="hover:text-pink-500 no-underline">CONTACTO</a>
                <a href="#especiales" className="hover:text-pink-500 no-underline">ESPECIALES</a>
                <a href="#reservas" className="hover:text-pink-500 no-underline">RESERVAS ONLINE</a>
                <a href="#suscribir" className="hover:text-pink-500 no-underline">SUSCRIBIR</a>
            </div>
        </nav>
    );
};

export default Navbar;

