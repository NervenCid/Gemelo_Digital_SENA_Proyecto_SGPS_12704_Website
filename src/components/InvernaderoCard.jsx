const InvernaderoCard = () => {
    return (
        <>
            <section className="container__invernadero">
                <h1>Invernadero</h1>
            </section>
            <div className="invernadero__images__container">
                <figure>
                    <img src="../../public/images/foto1.jpg" />
                    <img src="../../public/images/foto2.jpg" />
                    <img src="../../public/images/meteorilogica.jpg" alt="" />
                    <img src="../../public/images/sensores1.jpg" alt="" />
                    <img src="../../public/images/sensores2.jpg" alt="" />
                </figure>
            </div>
            <section className="results__container">
                <h1>Resultados</h1>
                <p>
                    El análisis exhaustivo del crecimiento de las plantas
                    incluye la identificación única de cada planta, variables
                    clave como longitud y área foliar, y un contexto temporal
                    que registra fechas y días desde el inicio del experimento.
                    Este enfoque permite correlacionar el desarrollo vegetal con
                    las condiciones ambientales. El área foliar, una métrica
                    crucial para evaluar fotosíntesis y productividad, muestra
                    un crecimiento exponencial. Por ejemplo, la Planta 1 creció
                    de 0.15 cm² a 263.48 cm² en 48 días, mientras que la Planta
                    2 pasó de 0.39 cm² a 344.73 cm². Estas diferencias podrían
                    deberse a factores genéticos o microambientales, resaltando
                    la necesidad de análisis individualizados. Gráficos y
                    comparaciones entre plantas identifican tendencias y
                    diferencias, útiles para validar datos y diseñar
                    intervenciones específicas. Las aplicaciones incluyen
                    optimización de recursos, diseño de modelos predictivos y
                    monitoreo automatizado para mejorar la productividad
                    agrícola. Este análisis permite reducir desperdicios,
                    incrementar rendimientos y prevenir problemas, contribuyendo
                    a una agricultura más sostenible y rentable.
                </p>
            </section>
            <div className="results__images__container">
                <figure>
                    <img
                        src="../../public/images/resultado1.jpg"
                        alt="Area de la planta"
                    />
                    <img src="../../public/images/resultado2.jpg" alt="" />
                    <img src="../../public/images/resultado3.jpg" alt="" />
                </figure>
            </div>
        </>
    );
};

export default InvernaderoCard;
