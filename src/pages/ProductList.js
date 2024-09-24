// src/pages/ProductList.js
import React from 'react';

const products = [
    { id: 1, name: 'Planta 1', price: 10, image: '/path/to/image1.jpg' },
    { id: 2, name: 'Planta 2', price: 15, image: '/path/to/image2.jpg' },
    // Añade más productos
];

const ProductList = () => {
    return (
        <div>
            <h2>Listado de Productos</h2>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button>Agregar al carrito</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
