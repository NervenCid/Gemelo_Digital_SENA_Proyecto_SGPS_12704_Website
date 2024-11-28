const Card = ({ items }) => {
    return (
        <div className="container__cards">
            {items.map((item, index) => (
                <article className="card__container" key={index}>
                    <img
                        src={item.image}
                        className="card__image"
                        alt={item.title}
                    />
                    <h1 className="card__title">{item.title}</h1>
                    <p className="card__description">{item.description}</p>
                </article>
            ))}
        </div>
    );
};

export default Card;
