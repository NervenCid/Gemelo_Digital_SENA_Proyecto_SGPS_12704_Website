import { Link } from "react-router-dom";

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
                    <h1 className="card__title">
                        <Link to={item.path}>{item.title}</Link>
                    </h1>

                    <p className="card__description">{item.description}</p>
                </article>
            ))}
        </div>
    );
};

export default Card;
