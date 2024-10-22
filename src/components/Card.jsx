const Card = ({title, description, image}) => {
    return (
            <article className='card__container'>
                <img src={image} className='card__image' alt={title}/>
                <h1 className='card__title'>{title}</h1>
                <p className='card__description'>{description}</p>
            </article>
    );
};

export default Card;
