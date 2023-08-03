import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";


const LandingPage = () => {

    return (
        <div className={style.background}>
        <div className={style.container}>
            <h1>CountriesWeb</h1>
            <img className={style.imagen} src="../../../imagenes/tierra.png" alt="" />
            <NavLink to="/home" className={style.boton}>Start</NavLink>
       </div>
       </div>
    )
}

export default LandingPage;