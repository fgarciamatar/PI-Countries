import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./CardsContainer.module.css";
//este componente renderiza cada Card

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  //Estados para el paginado
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  //cuando se monta hace el dispatch para traer los paises
  useEffect(() => {
    setLoading(true);
    dispatch(getCountries());
    setLoading(false);
  }, []);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
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
              countryId={country.countryId}
              nombre={country.nombre}
              imagen={country.imagen}
              continente={country.continente}
              capital={country.capital}
              subRegion={country.subRegion}
              area={country.area}
              poblacion={country.poblacion}
              key={country.countryId}
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
