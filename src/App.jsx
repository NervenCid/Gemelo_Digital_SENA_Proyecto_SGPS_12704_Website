import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Invern from "./views/Invern";
import Team from "./views/Team"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/invern" element={<Invern />} />
            <Route path="/team" element={<Team />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
