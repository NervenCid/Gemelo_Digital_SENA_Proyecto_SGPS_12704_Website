import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Inicio from "./views/Inicio";
import Invernadero from "./views/Invernadero";
import Equipo from "./views/Equipo";
import EstadoDelArte from "./views/EstadoDelArte";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Inicio />} />
                        <Route path="/Invernadero" element={<Invernadero />} />
                        <Route
                            path="/EstadodelArte"
                            element={<EstadoDelArte />}
                        />
                        <Route path="/Equipo" element={<Equipo />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
