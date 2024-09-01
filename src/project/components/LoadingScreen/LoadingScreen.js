// src/components/LoadingScreen.js
import React, { useEffect, useState } from 'react';
import './LoadingScreen.css'; // Create a CSS file for styling

const funFacts = [
    "Did you know? JavaScript was created in just 10 days.",
    "Tip: Use `console.log` for debugging, but remember to remove it in production!",
    "Did you know? React was created by Facebook and is now open source.",
    "Tip: Keep your components small and reusable for better maintainability.",
    "Did you know? JavaScript is not the same as Java!",
    "Tip: Use arrow functions to keep `this` context in callbacks."
];

const LoadingScreen = () => {
    const [fact, setFact] = useState('');

    useEffect(() => {
        // Select a random fun fact
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        setFact(randomFact);
    }, []);

    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p className="fun-fact">{fact}</p>
        </div>
    );
};

export default LoadingScreen;
