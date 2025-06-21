import "../styles/Formaciones.css";

function TrainCard({ institucion, titulo, inicio, finalizacion, imagen }) {
  return (
    <div className="TrainCard">
      <img src={imagen} alt={institucion} />
      <strong>{titulo}</strong>
      <p>
        <span>{inicio} - {finalizacion}</span>
        <span>{institucion}</span>
      </p>
    </div>
  );
}

export default TrainCard;
