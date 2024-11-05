import css from "./Camper.module.css";

export default function Camper({ camper }) {
  return (
    <div>
      <h4>{camper.name}</h4>
      <img src={camper.img} alt={camper.alt} />
      <p>Reviews: {camper.reviews}</p>
      <p> {camper.location}</p>
      <p>{camper.describtion}</p>
      <ul>
        {Object.keys(camper.equipment).map((eq) =>
          camper.equipment[eq] ? <li key={eq}>{eq}</li> : null
        )}
      </ul>
    </div>
  );
}
