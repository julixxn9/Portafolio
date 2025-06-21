import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PokeCard.css";

function PokeCard() {
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [poke, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, [id]);

  return (
    <div className="pokecard-container">
      {cargando && <p>Cargando...</p>}
      {error && <p>Error: Pokémon no encontrado</p>}
      {poke && (
        <div className="card">
          <h2>{poke.name}</h2>
          <img
            src={poke.sprites.other["official-artwork"].front_default}
            alt={poke.name}
          />
          <div className="types">
            {poke.types.map((tipo, i) => (
              <span key={i} className={`type ${tipo.type.name}`}>
                {tipo.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokeCard;