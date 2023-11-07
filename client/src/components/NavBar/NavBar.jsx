import style from "./NavBar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const { pathname } = useLocation(); //ruta actual
  let navigate = useNavigate(); //hook de react para navegar entre las rutas
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Verificar el ancho de la pantalla y establecer showMobileMenu en consecuencia
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Puedes ajustar este valor según tus necesidades
        setShowMobileMenu(true);
      } else {
        setShowMobileMenu(false);
      }
    };

    handleResize(); // Verificar el tamaño de la pantalla al cargar la página
    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la ventana
    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar el componente
    };
  }, []);
  const toggleMobileMenu = () => {
    setShowMenu(!showMenu); // Cambia el estado para mostrar/ocultar el menú
  };
  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  const handleBack = () => {
    navigate(-1); //vuelve a la ruta anterior
  };

  return (
    <div className={style.container}>
      {showMobileMenu ? ( // Mostrar el icono de hamburguesa solo en pantallas pequeñas
        <GiHamburgerMenu
          style={{ color: "white" }}
          className="botonHamburguesa"
          onClick={toggleMobileMenu}
        />
      ) : (
        <div className={style.container2}>
          <a href="https://github.com/fgarciamatar/PI-Countries">
            <img
              src="./../../../imagenes/tierra.png"
              alt="Logo Planeta"
              className={style.imagen}
            />
          </a>
          <h1> CountriesWeb</h1>
          <div className={style.container2}>
            <img
              className={style.botonAtras}
              src={"./../../../imagenes/atras.png"}
              alt="boton atras"
              onClick={handleBack}
            />

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
                <button className={style.botonNav}>CREAR ACTIVIDAD</button>
              </Link>
            ) : (
              <Link to={"/home/create"}>
                <button className={style.botonNavActive}>
                  CREATE ACTIVITY
                </button>
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
      )}
      {showMobileMenu &&
        showMenu && ( // Mostrar si showMobileMenu y showMenu son verdaderos}
          <div className={style.containerResponsive}>
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
            {pathname !== "/home" ? (
              <Link to={"/home"}>
                <button className={style.botonNav} onClick={closeMobileMenu}>
                  HOME
                </button>
              </Link>
            ) : (
              <Link to={"/home"}>
                <button
                  className={style.botonNavActive}
                  onClick={closeMobileMenu}
                >
                  HOME
                </button>
              </Link>
            )}
            {pathname !== "/home/create" ? (
              <Link to={"/home/create"}>
                <button className={style.botonNav} onClick={closeMobileMenu}>
                  CREAR ACTIVIDAD
                </button>
              </Link>
            ) : (
              <Link to={"/home/create"}>
                <button
                  className={style.botonNavActive}
                  onClick={closeMobileMenu}
                >
                  CREATE ACTIVITY
                </button>
              </Link>
            )}

            {pathname !== "/home/about" ? (
              <Link to={"/home/about"}>
                <button className={style.botonNav} onClick={closeMobileMenu}>
                  ABOUT
                </button>
              </Link>
            ) : (
              <Link to={"/home/about"}>
                <button
                  className={style.botonNavActive}
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </button>
              </Link>
            )}
          </div>
        )}
    </div>
  );
};

export default NavBar;
