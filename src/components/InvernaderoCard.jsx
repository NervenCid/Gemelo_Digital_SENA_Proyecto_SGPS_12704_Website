const InvernaderoCard = ({ items }) => {
    return (
        <section className="container__cards__invernadero">
            {items.map((item, index) => (
                <div className="card__invernadero" key={index}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="card__image__invernadero"
                    />
                </div>
            ))}
        </section>
    );
};

export default InvernaderoCard;
