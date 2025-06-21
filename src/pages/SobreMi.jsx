import "../styles/SobreMi.css";
import { datos } from "../../datos.js"; // Ajustá la ruta si es distinta

const SobreMi = () => {
  return (
    <div className="SobreMi">
      <h2 className="section-title">Sobre mí</h2>
      <div className="contenedor">
        <section className="section-image">
          <img src={datos.about.foto} alt="Foto de perfil" />
        </section>
        <section id="about" className="about-section">
          <div className="about-content">
            <h3 className="section-name">{datos.about.nombre}</h3>
            {datos.about.parrafos.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreMi;
