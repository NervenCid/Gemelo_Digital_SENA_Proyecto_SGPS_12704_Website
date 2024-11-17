import { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="carousel">
            <div className="container__image">
                <img src={items[currentIndex].imgSrc} alt={items[currentIndex].title} />
            </div>
            <div className="container__text">
                <h1>{items[currentIndex].title}</h1>
                <button>Empezar Ahora</button>
            </div>
            <button className="carousel__button carousel__button--prev" onClick={handlePrev}>
                &#8592;
            </button>
            <button className="carousel__button carousel__button--next" onClick={handleNext}>
                &#8594;
            </button>
        </div>
    );
};

export default Carousel;


