// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../../data/Data.js';


const ProductDetail = () => {
    //? Use the correct parameter name `name`
    const { name } = useParams();

    //? Check if name exists and is a valid string before using toLowerCase
    if (!name) {
        return <div>Invalid product name</div>;
    }

    //? Find the product by name (case-insensitive)
    const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} width="300" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};




export default ProductDetail;
