export default function Footer() {
    return (
        <footer className="footer">
            <div className="container__footer">
                <h1>Nuestras Redes - Visitanos</h1>
                <div className="container__social">
                    <div className="social__container">
                        <a href="https://github.com/NervenCid/Gemelo_Digital_SENA_Proyecto_SGPS_12704_Website" target="_blank">
                            <h2>Github</h2>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt="GitHub icon"
                            />
                        </a>
                    </div>
                    <div className="social__container">
                        <a href="https://github.com/NervenCid/Gemelo_Digital_SENA_Proyecto_SGPS_12704" target="_blank">
                            <h2>Gemelo Digital</h2>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt="GitHub icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container__footer">
                <h1>
                    <a href="https://gics-sennova.com/" target="_blank">GICS</a>
                </h1>
                <h2>
                    Carrera 30 No. 17B-25 Sur, Bogotá D.C - PBX (57 1) 5960050 .
                </h2>
            </div>
        </footer>
    );
}
