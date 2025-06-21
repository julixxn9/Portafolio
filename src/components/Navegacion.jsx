import { useRef, useState, useEffect } from "react";
import Home from "../pages/Home.jsx";
import SobreMi from "../pages/SobreMi.jsx";
import Habilidades from "../pages/Habilidades.jsx";
import Formacion from "../pages/Formacion.jsx";
import "../styles/navegacion.css";
import Proyectos from "../pages/Proyectos.jsx";

function Navegacion() {
  const homeRef = useRef(null);
  const sobreMiRef = useRef(null);
  const habilidadesRef = useRef(null);
  const formacionRef = useRef(null);
  const proyectosRef = useRef(null);

  const [Scroll, setScroll] = useState(false);

    useEffect(() => { // este hook se ejecuta cada vez que cambia el estado
    const handleScroll = () => {
        setScroll(window.scrollY > 10); // esto hace que cada que se haga scroll
        // hace que se vea el navBar borroso despues de 10px
    };

    window.addEventListener("scroll", handleScroll); // agrega el evento de scroll a la ventana
    return () => window.removeEventListener("scroll", handleScroll); // quita el evento de scroll a la ventana para que no se repita
    }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" }); // esto es para que se vea bonito cuando haga scroll
  }; 

  return (
    <div className="conten-tall">
      <div className="wrapper">
      <nav className={`navbar ${Scroll ? "scrolled" : ""}`}>
        <ul>
          <li onClick={() => scrollTo(homeRef)}>Home</li>
          <li onClick={() => scrollTo(sobreMiRef)}>Sobre mí</li>
          <li onClick={() => scrollTo(habilidadesRef)}>Habilidades</li>
          <li onClick={() => scrollTo(formacionRef)}>Formación</li>
          <li onClick={() => scrollTo(proyectosRef)}>Proyectos</li>
        </ul>
      </nav>

      <section ref={homeRef} className="section">
        <Home />
      </section>

      <section ref={sobreMiRef} className="section sobre-mi">
        <SobreMi />
      </section>

      <section ref={habilidadesRef} className="section habilidades">
        <Habilidades />
      </section>

      <section ref={formacionRef} className="section formacion">
        <Formacion />
      </section>
      <section ref={formacionRef} className="section formacion">
        <Proyectos />
      </section>
      </div>
    </div>
  );
}

export default Navegacion;
