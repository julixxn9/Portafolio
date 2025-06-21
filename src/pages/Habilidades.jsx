import "../styles/Habilidades.css";
import { datos } from "../../datos"; // Ajustá la ruta si cambia

const Habilidades = () => {
  return (
    <section id="habilidades" className="seccion-habilidades">
      <h2 className="titulo-habilidades">Habilidades</h2>
      <div className="grid-habilidades">
        {datos.habilidades.map((habilidad, indice) => (
          <div key={indice} className="tarjeta-habilidad">
            <img
              src={`/Portafolio/${habilidad.icono}`}
              alt={`${habilidad.nombre} icono`}
              className="icono-habilidad"
            />
            <span>{habilidad.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
