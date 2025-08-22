import { useRef, useState } from "react";
import { datos } from "../../datos.js";
import "../styles/Proyectos.css";

function Proyectos() {
  const [view, setView] = useState(0);
  const movRef = useRef();

  const leftHandler = () => {
    if (view % datos.proyectos.length === 0 || view === 0) {
      const mover = view + datos.proyectos.length;
      movRef.current.style.left = `${mover * -16}rem`;
    }
    setView(view + 1);
  };

  const rightHandler = () => {
    if (view % datos.proyectos.length === 0) {
      movRef.current.style.left = `${view * -16}rem`;
    }
    setView(view - 1);
  };

  return (
    <section className="proyectos-section">
      <h2 className="proyectos-title">Proyectos</h2>
      <div className="slider-container">
        <div
          ref={movRef}
          className="move-container"
          style={{
            transform: `translateX(${view * 16}rem)`,
            width: `${(datos.proyectos.length + 3) * 16}rem`,
            left: "0rem",
          }}
        >
          {datos.proyectos.map((proyecto, index) => (
            <div className="proyecto-card" key={index}>
              <img src={proyecto.imagen} alt={proyecto.nombre} />
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="proyecto-links">
                <a href={proyecto.enlaceWeb}  target="_blank" rel="noreferrer">
                  Ver Web
                </a>
                <a href={proyecto.enlaceRepo} target="_blank" rel="noreferrer">
                  Código
                </a>
              </div>
            </div>
          ))}
          {/* Copia de los primeros 3 para loop visual */}
          {datos.proyectos.map((proyecto, index) => {
            if (index < 3)
              return (
                <div className="proyecto-card" key={`clone-${index}`}>
                  <img src={proyecto.imagen} alt={proyecto.nombre} />
                  <h3>{proyecto.nombre}</h3>
                  <p>{proyecto.descripcion}</p>
                  <div className="proyecto-links">
                    <a
                      href={proyecto.enlaceWeb}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver Web
                    </a>
                    <a
                      href={proyecto.enlaceRepo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Código
                    </a>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
      <div className="btn-container">
        <button style={{ transform: "scaleX(-1)" }} onClick={leftHandler}>
          &#10148;
        </button>
        <button onClick={rightHandler}>&#10148;</button>
      </div>
    </section>
  );
}

export default Proyectos;
