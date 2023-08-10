import React, { useEffect } from "react"; // Asegúrate de importar React y useEffect
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/actions";
import { useParams } from "react-router-dom";

import style from "./DetailPage.module.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country); // Mueve la definición de 'country' aquí
  const { idPais } = useParams();

  useEffect(() => {
    dispatch(getCountry(idPais));
  }, [dispatch, idPais]); // Agrega 'dispatch' e 'idPais' como dependencias

  return (
    <div className={style.container}>
      <div className={style.bandera}>
        <h1>
          {country.nombre}
        </h1>
        <img src={country.imagen} alt="" />
        <p> {country.countryId}</p>
      </div>
      <div className={style.infoContainer}>
        <div className={style.info}>
          <img src={"./../../../imagenes/Continente.png"} alt="" />
          <p>Continente: {country.continente}</p>
        </div>
        <div className={style.info}>
          <img src={"./../../../imagenes/Capital.png"} alt="" />
          <p>Capital: {country.capital}</p>
        </div>
        <div className={style.info}>
          <img src={"./../../../imagenes/Subregion.png"} alt="" />
          <p>Subregion: {country.subRegion}</p>
        </div>
        <div className={style.info}>
          <img src={"./../../../imagenes/Area.png"} alt="" />
          <p>Area: {country.area}</p>
        </div>
        <div className={style.info}>
          <img src={"./../../../imagenes/Poblacion.png"} alt="" />
          <p>Poblacion: {country.poblacion}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;