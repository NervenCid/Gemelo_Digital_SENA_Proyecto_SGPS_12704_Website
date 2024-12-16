import React from "react";

const TeamCard = ({ teamList }) => {
    return (
        <div className="team">
            <h1>Grupo de Investigación</h1>
            <div className="team__list">
                {teamList.map(({ name, description, image }, index) => (
                    <article key={index} className="container__team">
                        <h1>{name}</h1>
                        <div className="information__team">
                            <img
                                src={image}
                                className="team__image"
                                alt={name}
                            />
                            <p className="team__description">{description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default TeamCard;
