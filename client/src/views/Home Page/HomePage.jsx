import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filter from "../../components/Filters/Filter";
import style from "./Home.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries } from "../../redux/actions";
import { FiFilter } from "react-icons/fi";

const HomePage = () => {
  const dispatch = useDispatch();
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter); // Cambia el estado para mostrar/ocultar el menú
  };

  useEffect(() => {
    //cuando se renderiza Home -> se distpacha getCountries --> guarda los paises en el estado global, countries
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    // Verificar el ancho de la pantalla y establecer showMobileMenu en consecuencia
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        // Puedes ajustar este valor según tus necesidades
        setShowMobileFilter(true);
      } else {
        setShowMobileFilter(false);
      }
    };

    handleResize(); // Verificar el tamaño de la pantalla al cargar la página
    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la ventana
    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar el componente
    };
  }, []);

  return (
    <>
      <div className={style.container}>
      {showMobileFilter ? (
        <div className={style.containerFilterIcon}>
          <FiFilter
            className={style.iconFilter}
            onClick={() => {
              console.log("Icono de filtro clicado"); // Agrega este mensaje de depuración
              toggleMobileFilter();
            }}
          />
        </div>
      ) : (
      
          <div className={style.containerFilter}>
            <Filter />
          </div>
      
      )}
    
        {showMobileFilter && showFilter && (
          <div>
             <div className={style.containerFilterIcon}>
          <FiFilter
            className={style.iconFilter}
            onClick={() => {
              console.log("Icono de filtro clicado"); // Agrega este mensaje de depuración
              toggleMobileFilter();
            }}
          />
        </div>
          <div className={style.containerFilter}>
            <Filter />
          </div>
          </div>
        )}
        <div className={style.containerCard}>
          <CardsContainer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
