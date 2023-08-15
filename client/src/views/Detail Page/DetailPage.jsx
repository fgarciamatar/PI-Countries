import React, { useEffect } from "react"; // Asegúrate de importar React y useEffect
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getActivities } from "../../redux/actions";
import { useParams } from "react-router-dom";

import style from "./DetailPage.module.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const activities = useSelector((state) => state.activities);
  const { idPais } = useParams();

  useEffect(() => {
    dispatch(getCountry(idPais));
    dispatch(getActivities());
  }, [dispatch, idPais]); // Agrega 'dispatch' e 'idPais' como dependencias

  const countryActivities = activities.filter((activity) =>
    activity.countries.includes(idPais)
  );
  console.log(countryActivities);
  console.log(activities);
  return (
    <div className={style.containerGeneral}>
      <div className={style.container}>
      <div className={style.bandera}>
        <h1>{country.nombre}</h1>
        <img src={country.imagen} alt="" />
        <p> {country.id}</p>
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
        <h1>Actividades:</h1>
      <div className={style.activitiesContainer}>
        {countryActivities.length > 0 ? (
          <>
            {countryActivities.map(activity => (
              <div key={activity.id}>
                 <div className={style.info}>
                 <img src={"./../../../imagenes/actividad.png"} alt="" />
                <h2>{activity.nombre}</h2>
                </div>
                <div className={style.info}>
                <img src={"./../../../imagenes/duracion.png"} alt="" />
                <p>Duracion: {activity.duracion}hs</p>
                </div>
                <div className={style.info}>
                <img src={"./../../../imagenes/dificultad.png"} alt="" />
                <p>Dificultad: {activity.dificultad}</p>
                </div>
                <div className={style.info}>
                <img src={"./../../../imagenes/temporada.png"} alt="" />
                <p>Temporada: {activity.temporada} </p>
                </div>

              </div>
            ))}
          </>
        ) :  <p>No hay actividades disponibles para este pais</p>}
      </div>
      
    </div>
  );
};

export default DetailPage;
