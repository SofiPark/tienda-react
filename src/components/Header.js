// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
    return (
        <header>
            <h1>Tienda Virtual</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/carrito">Carrito ({cartItems})</Link>
            </nav>
        </header>
    );
};

export default Header;
