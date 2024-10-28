import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/inicio";
import OMuseu from "./screens/o-museu";
import Layout from "./screens/layout";
import Visite from "./screens/visite";
import VisitaGuiada from "./screens/visita-guiada";
import Contato from "./screens/contato";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="o-museu" element={<OMuseu />} />
          <Route path="visite" element={<Visite />} />
          <Route path="visita-guiada" element={<VisitaGuiada />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
