import React from 'react';
// Importa la imagen del logo
import Logo from './assets/src/componentes/imagenes/LogoNails'; // Ajusta la ruta a la ubicación de tu imagen

const Logo = ({ src = logo, alt = 'Logo', className = '' }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-auto h-10 ${className}`} // Puedes ajustar las clases según tus necesidades
    />
  );
};

export default Logo;


