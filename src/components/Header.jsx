import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import "../styles/Header.css"
import {ShowContext} from "../context/Animacion.jsx";

function Header() {

  const navegarA = useNavigate();
  const { showHandler, hideHandler } = useContext(ShowContext);

const navigateHandler = (event, donde) => {
  event.preventDefault();
  hideHandler();
  setTimeout(() => {
    navegarA(donde);
    showHandler();
  }, 1000);
};


  return (
    <div className="Header" >
        <img src="https://placehold.co/300" alt="logo" />
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={(e)=>navigateHandler(e,"/")} >Inicio</a>
                </li>
                <li>
                    <a href="#" onClick={(e)=>navigateHandler(e,"/About")}>Sobre mi</a>
                </li>
                <li>
                    <a href="#" onClick={(e)=>navigateHandler(e,"/Skills")}>Habilidades</a>
                </li>
                <li>
                    <a href="#" onClick={(e)=>navigateHandler(e,"/Training")}>Formacion</a>
                </li>
                <li>
                    <a href="#" onClick={(e)=>navigateHandler(e,"/Projects")}>Proyectos</a>
                </li>
                <li>
                    <a href="#" onClick={(e)=>navigateHandler(e,"/Contacts")}>Contactos</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header