// ThemeToggle.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faStar } from '@fortawesome/free-solid-svg-icons';
import './ThemeToggle.css'; // Import your CSS styles



function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Load the current theme from localStorage
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    const handleToggle = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}
            onClick={handleToggle}
        >
            <FontAwesomeIcon
                icon={isDarkMode ? faSun : faStar}
                className="toggle-icon"
            />
        </button>
    );
}

export default ThemeToggle;
