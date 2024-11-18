import React, { useState } from 'react';

const TeamCard = ({ teamList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamList.length); 
    };

    const prevCard = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + teamList.length) % teamList.length
        );
    };

    const { name, description, image } = teamList[currentIndex];

    return (
        <div className="team">
            <h1>Grupo de Investigación</h1>
            <div className="carousel_team">
                <button onClick={prevCard} className="carousel__button carousel__button--prev">
                    &#8592;
                </button>
                <article className="container__team">
                    <h1>{name}</h1>
                    <div className="information__team">
                        <img src={image} className="team__image" alt={name} />
                        <p className="team__description">{description}</p>
                    </div>
                </article>
                <button onClick={nextCard} className="carousel__button carousel__button--next">
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default TeamCard;
