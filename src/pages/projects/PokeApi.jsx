import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/PokeApi.css"

function PokeApi() {

  const refNombre = useRef();
  const navegarA = useNavigate();

  const searchHandler = (poke) => {
    poke.preventDefault();
    const nombre = refNombre.current.value.trim().toLowerCase();
    navegarA("/projects/pokeapi/"+nombre)
  }
  
  return (
    <div className="pokeapi-container" >
      <h2>
        PokeApi!
      </h2>
      <form onSubmit={searchHandler} className="form">
        <label>
          <span>Nombre del Pokemon</span>
          <input ref={refNombre} type="text" className="input" required />
        </label>
        <button type="submit" className="button">Buscar</button>
      </form>

    </div>
  )
}

export default PokeApi