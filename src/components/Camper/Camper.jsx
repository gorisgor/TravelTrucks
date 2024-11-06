import css from "./Camper.module.css";
export default function Camper({ camper }) {

  return (
    <div>
      <h4>{camper.name}</h4>
      <p>{camper.price}</p>
      <p>{camper.location}</p>
      <p>{camper.description}</p>  
      <p>{camper.rating}({camper.reviews ? camper.reviews.length : 0} Reviews)</p>
      <img src={camper.gallery[0].original} alt="Camper Image 1" />
      <div>
        <div>
          <ul>
            <li> {camper.AC&& <p>AC</p>}</li>
            <li> {camper.bathroom && <p>Bathroom</p>}</li>
            <li> {camper.kitchen && <p>Kitchen</p>}</li>
            <li> {camper.TV && <p>TV</p>}</li>
            <li> {camper.radio && <p>Radio</p>}</li>
            <li> {camper.refrigerator && <p>Refrigerator</p>}</li>
            <li> {camper.microwave && <p>Microwave</p>}</li>
            <li> {camper.gas && <p>Gas</p>}</li>
            <li> {camper.water && <p>Water</p>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

