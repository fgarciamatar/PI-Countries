import style from "./Card.module.css"
import { Link } from "react-router-dom";
//este componente Muestra la info de cada country y 
//nos lleva al detail atraves de un Link
const Cards = ({id, nombre, imagen, continente}) => {
    return (
        <div className={style.container}>
            <img src={imagen} alt="" />
            <Link className={style.link} to={`/detail/${id}`}>
                <h1>{nombre.length > 22 ? `${nombre.substring(0, 22)}...` : nombre}</h1>
            </Link>
            <p>Continente: {continente}</p>
        </div>
    )
}




export default Cards;