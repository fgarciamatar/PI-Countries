import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActivities, getCountry } from "../../redux/actions";
import style from "./DetailPage.module.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country); //traemos el estado global country a la variable country
  const activities = useSelector((state) => state.activities);//traemos el estado global activities a la variable activities
  const { idPais } = useParams(); //traemos el params idPais de la url

  useEffect(() => { //se ejecutara cuando el componente se haya renderizado
    dispatch(getCountry(idPais)); //dispatch a getCountry pasandole idPais(guarda los paises en el estado global)
    dispatch(getActivities());//dispatch a getActivities (guarda las acividades en el estado global)
  }, [dispatch, idPais]); // se ejecutará cuando cambie el valor de dispatch o idPais.

  const countryActivities = activities.filter((activity) =>
    activity.countries.includes(idPais)//filtramos las actividades ,si actividad.countries tiene el idPais(pasado ppor params)
  );
  // console.log(countryActivities);
  // console.log(activities);
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
