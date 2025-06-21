import SocialItems from "../components/SocialItems";
import "../styles/Home.css"
import { datos } from "../../datos.js";

function Home() {
  return (
    <div className="home-container" >
        <div className="card">
            <div className="info">
                <div className="texto">
                    <span>{datos.home.saludo}</span>
                    <h2>{datos.home.nombre}</h2>
                    <span className="developer">{datos.home.profesion}</span>
                    <p>{datos.home.resumen}</p>
                    <div className="btn-separador">
                        <button>Descargar CV</button>
                        <button>Contacto</button>
                    </div>
                </div>
                <div className="image">
                    <img src={datos.home.foto} alt="" />
                </div>
            </div>
            <div className="social">
                <ul>
                    {datos.home.redes.map((red,index)=>{
                        return <SocialItems href={red.url} src={red.icono} alt={red.nombre} key={index} />
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home