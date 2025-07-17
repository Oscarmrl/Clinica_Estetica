import Home from "./components/Home/Home";
import Navegacion from "./components/Home/Navegacion";
import Nosotros from "./components/Nosotros/Nosotros";
import Tratamientos from "./components/Tratamientos/Tratamientos";
import Citas from "./components/citas/Citas";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/Clinica_Estetica" element={<Home />} />
        <Route path="/Clinica_Estetica/Nosotros" element={<Nosotros />} />
        <Route
          path="/Clinica_Estetica/Tratamientos"
          element={<Tratamientos />}
        />
        <Route path="/Clinica_Estetica/Citas" element={<Citas />} />
      </Routes>
    </>
  );
}

export default App;
