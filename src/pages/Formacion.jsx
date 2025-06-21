import { useRef, useState } from "react";
import { datos } from "../../datos.js";
import TrainCard from "../pages/TrainCard.jsx";
import "../styles/Formacion.css";

function Formacion() {
  const [view, setView] = useState(0);

  const movRef = useRef()

  const leftHandler = () => {
    if (view % datos.formacion.length == 0 || view == 0) {
      const mover = view + (datos.formacion.length * 14);
      movRef.current.style.left = `${mover * -1}rem`;
    }
    setView(view + 14);
  };

  const rightHandler = () => {
    if (view % datos.formacion.length == 0) {
      movRef.current.style.left = `${view * -1}rem`
    }
    setView(view - 14);
  };

  return (
    <section className="formacion-section">
      <h2 className="formacion-title">Formación</h2>
      <div className="slider-container">
        <div ref={movRef}
          className="move-container"
          style={{
            transform: `translateX(${view}rem)`,
            width: `${(datos.formacion.length + 3) * 14}rem`,
            left: "0rem",
          }}
        >
          {datos.formacion.map((formacion, index) => (
            <TrainCard
              key={index}
              institucion={formacion.institucion}
              titulo={formacion.titulo}
              inicio={formacion.duracion.split(" - ")[0]}
              finalizacion={formacion.duracion.split(" - ")[1]}
              imagen={formacion.foto}
            />
          ))}
          {datos.formacion.map((formacion, index) => {
            if(index < 3)return(
            <TrainCard
              key={index}
              institucion={formacion.institucion}
              titulo={formacion.titulo}
              inicio={formacion.duracion.split(" - ")[0]}
              finalizacion={formacion.duracion.split(" - ")[1]}
              imagen={formacion.foto}
            />
          )})}
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

export default Formacion;
