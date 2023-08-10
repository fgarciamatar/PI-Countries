import style from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <a href="https://github.com/fgarciamatar/PI-Countries">
          <img
            src="./../../../imagenes/tierra.png"
            alt="Logo Planeta"
            className={style.imagen}
          />
        </a>

        <h1> CountriesWeb</h1>
      </div>
      <div className={style.container2}>
        {pathname !== "/home" ? (
          <Link to={"/home"}>
            <img
              className={style.botonAtras}
              src={"./../../../imagenes/atras.png"}
              alt="boton atras"
            />
          </Link>
        ) : (
          <Link to={"/home"}>
            <img
              className={style.botonAtrasOff}
              src={"./../../../imagenes/atras.png"}
              alt="boton atras"
            />
          </Link>
        )}

        {pathname !== "/home" ? (
          <Link to={"/home"}>
            <button className={style.botonNav}>HOME</button>
          </Link>
        ) : (
          <Link to={"/home"}>
            <button className={style.botonNavActive}>HOME</button>
          </Link>
        )}
        {pathname !== "/home/create" ? (
          <Link to={"/home/create"}>
            <button className={style.botonNav}>CREATE ACTIVITY</button>
          </Link>
        ) : (
          <Link to={"/home/create"}>
            <button className={style.botonNavActive}>CREATE ACTIVITY</button>
          </Link>
        )}

        {pathname !== "/home/about" ? (
          <Link to={"/home/about"}>
            <button className={style.botonNav}>ABOUT</button>
          </Link>
        ) : (
          <Link to={"/home/about"}>
            <button className={style.botonNavActive}>ABOUT</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
