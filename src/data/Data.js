// src/data/products.js

import { assets } from "../assets/assets"


const products = [
    {
        id: 1,
        name: "Product1", // Ensure this is a string
        description: "This is the first product.",
        price: 29.99,
        imageUrl: "/images/product1.jpg"
    },
    {
        id: 2,
        name: "Product2", // Ensure this is a string
        description: "This is the second product.",
        price: 49.99,
        imageUrl: "/images/product2.jpg"
    },
    {
        id: 3,
        name: "Product3", // Ensure this is a string
        description: "This is the third product.",
        price: 19.99,
        imageUrl: "/images/product3.jpg"
    }
];

export default products;

