import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { getActivities } from "./../../redux/actions";
import style from "./CardsContainer.module.css";
//este componente renderiza cada Card

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);//Traemos el estado global countries y lo guardamos en la variable
  const dispatch = useDispatch();

  //Estados para el paginado
  const [currentPage, setCurrentPage] = useState(0); //estado local para guardar la pagina actual
  const countriesPerPage = 10; //Cantidad de Paises por pagina


  useEffect(() => { //cuando se renderiza CardsContainer -> el estado activities se carga con las actividades
   dispatch(getActivities());
  }, []);
 

  const  indexOfFirstCountry = currentPage * countriesPerPage; //indice del primer pais = pagina actual * cantidad de paises por pagina
  const indexOfLastCountry = indexOfFirstCountry + countriesPerPage;//indice del ultimo pais = indice del primer pais + cant de paises por pagina
  const currentCountries = countries?.slice(//currentCountries  = countries(estado global donde estan todos los paises)
    indexOfFirstCountry,  //aplicamos .slice (devuelve una copia de countries desde el indice del primer pais hasta el indice del ultimo pais)
    indexOfLastCountry  //devuelve los primero 10 paises (de 0 a 9)
  );

  const paginate = (page) => {
    setCurrentPage(page);//funcion donde cambiamos el estado para cambiar la pagina actual
                          //le pasamos la pagina 
  };

  return (
    <div className={style.container}>
      <div className={style.containerCard}>
        {currentCountries.map((country) => { //recorremos currentCountries , seria la copia de countries con el metodo sort
          return (
            <Card //renderizamos cada Card
              id={country.id}
              nombre={country.nombre}
              imagen={country.imagen}
              continente={country.continente}
              capital={country.capital}
              subRegion={country.subRegion}
              area={country.area}
              poblacion={country.poblacion}
              key={country.id}
            />
          );
        })}
      </div>
      <div className={style.pagination}>
        <Pagination //renderizamos el componente Pagination 
          countriesPerPage={countriesPerPage} //cant de Paises por pagina
          totalCountries={countries.length} // cantidad total de paises (250)
          currentPage={currentPage} // pagina Actual
          paginate={paginate} // funcion para cambiar la pagina actual
        />
      </div>
    </div>
  );
};

export default CardsContainer;
