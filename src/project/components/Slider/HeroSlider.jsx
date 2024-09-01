import React from 'react';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import './HeroSlider.css';
import Image1 from "../../../assets/images/Banner/Banner.jpg";
import Image2 from "../../../assets/images/Banner/Banner1.jpg";
import Image3 from "../../../assets/images/Banner/Banner2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const slidesData = [
        {
            image: Image1,
            title: "A ROAST ABOVE THE REST",
            description: "Refined ambience. Exceptional taste.",
            buttonText: "Visit Us!",
            navigate: "/outlets"
        },
        {
            image: Image2,
            title: "More Than Just Cake",
            description: "A symphony of flavors for every palate.",
            buttonText: "Discover More",
            navigate: "/cakes"
        },
        {
            image: Image3,
            title: "Beyond the Basics",
            description: "Experience culinary artistry at its finest.",
            buttonText: "Join Our Workshop",
            navigate: "/workshop"
        }
    ];

    return (
        <section className="hero-slider">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="slider-image-container">
                        <img src={slide.image} alt={slide.title} className="slider-image" />
                        <div className="slider-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <button
                                className="visit-button"
                                onClick={() => navigate(slide.navigate)}
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default HeroSlider;


