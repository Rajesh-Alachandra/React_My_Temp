// src/pages/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../../data/Data.js';

const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {/* // ?Product details by using params ID */}
                        {/* <Link to={`/products/${product.id}`}>{product.name}</Link> */}
                        {/* // ?Product details by using params Name */}
                        <Link to={`/products/${product.name.toLowerCase()}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
