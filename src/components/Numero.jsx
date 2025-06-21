import { useParams } from "react-router-dom";

function Numero() {
    const parametros = useParams();

  return (
    <div>
        <p>El numero que colocaste es {parametros.num}</p>
        <p>El nombre que colocaste es {parametros.nombre}</p>
    </div>
  )
}

export default Numero