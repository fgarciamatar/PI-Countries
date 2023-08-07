import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
//este componente Muestra la info de cada country y 
//nos lleva al detail atraves de un Link
const Cards = ({countryId, nombre, imagen, continente}) => {
    return (
        <div className={style.container}>
            <img src={imagen} alt="" />
            <NavLink to={`/detail/${countryId}`}>
                <h1>{nombre}</h1>
            </NavLink>
            <p>Continente: {continente}</p>
        </div>
    )
}




export default Cards;