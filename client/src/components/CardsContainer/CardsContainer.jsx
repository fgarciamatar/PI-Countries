import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./CardsContainer.module.css";
import { getActivities } from "./../../redux/actions"
//este componente renderiza cada Card

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  //Estados para el paginado
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const countriesPerPage = 10;


  useEffect(() => { //cuando se renderiza CardsContainer -> el estado activities se carga con las actividades
   dispatch(getActivities());
  }, []);
 

  const  indexOfFirstCountry = currentPage * countriesPerPage;
  const indexOfLastCountry = indexOfFirstCountry + countriesPerPage;
  const currentCountries = countries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.container}>
      <div className={style.containerCard}>
        {currentCountries.map((country) => {
          return (
            <Card
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
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
