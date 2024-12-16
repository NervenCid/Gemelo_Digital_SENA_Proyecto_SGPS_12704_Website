const InvernaderoCard = ({ items }) => {
    return (
        <>
            <section className="container__invernadero">
                <h1>Invernadero</h1>
                <p>
                    El invernadero del SENA CEET es un espacio dedicado al
                    aprendizaje y la innovación en técnicas agrícolas
                    sostenibles. Diseñado para ser un entorno controlado, este
                    invernadero ofrece a los aprendices una experiencia práctica
                    en el cultivo de diferentes tipos de plantas, incorporando
                    tecnologías modernas y métodos amigables con el medio
                    ambiente. Su propósito es formar talento humano capacitado
                    para enfrentar los retos del sector agrícola, promoviendo el
                    desarrollo sostenible y la productividad.
                </p>
                {items.map((item, index) => (
                    <div className="card__invernadero" key={index}>
                        <p>{item.description}</p>
                        <img src={item.image} />
                    </div>
                ))}
            </section>
        </>
    );
};

export default InvernaderoCard;
