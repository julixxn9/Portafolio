import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacion from "./Navegacion.jsx";
import PokeApi from "../pages/projects/PokeApi.jsx";
import PokeCard from "./PokeCard";
import "../styles/App.css"
import Home from "../pages/Home.jsx";
import SobreMi from "../pages/SobreMi.jsx";
import Habilidades from "../pages/Habilidades.jsx";
import Formacion from "../pages/Formacion.jsx";
import Animacion from "../context/Animacion.jsx";
import Contactos from "../pages/Contactos.jsx";

import "../styles/App.css"
import Proyectos from "../pages/Proyectos.jsx";

function App() {
  return (
    <BrowserRouter basename="/Portafolio/">
      <Animacion>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<SobreMi/>}/>
            <Route path="/Skills" element={<Habilidades/>}/>
            <Route path="/Training" element={<Formacion/>}/>
            <Route path="/Projects" element={<Proyectos/>}/>
            <Route path="/Contacts" element={<Contactos/>}/>
            <Route path="/nav-mode" element={<Navegacion />} />
            <Route path="/projects/pokeapi" element={<PokeApi />} />
            <Route path="/projects/pokeapi/:id" element={<PokeCard />} />
          </Routes>
      </Animacion>
    </BrowserRouter>
  );
}

export default App;
