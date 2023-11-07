import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  alphabeticalOrder,
  filterByActivity,
  filterByContinent,
  getCountryByName,
  populationOrder,
} from "./../../redux/actions";
import style from "./Filter.module.css";


const Filter = () => {
  const activities = useSelector((state) => state.activities); //traemos el estado global de las actividades
  // console.log(activities);
  const dispatch = useDispatch();
  const [name, setName] = useState(""); //estado local para guardar el nombre del pais buscado
  const [searchValue, setSearchValue] = useState(""); //estado local para el input de buscar por nombre

  const handleFilterByContinent = (event) => {
    dispatch(filterByContinent(event.target.value)); //dispatch a filterByContinent y le pasamos el value de option
  };
  const handleAlphabeticalOrder = (event) => {
    dispatch(alphabeticalOrder(event.target.value)); //dispatch a alphabeticalOrder y le pasamos el value de option
  };

  const handlePopulationOrder = (event) => {
    dispatch(populationOrder(event.target.value)); //dispatch a populationOrder y le pasamos el value de option
  };
  const handleFilterByActivity = (event) => {
    dispatch(filterByActivity(event.target.value)); //dispatch a filterByActivity y le pasamos el value de option
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value); //al estado searchValue le doy el valor de lo escrito en el input
    setName(event.target.value); //al estado name le doy el valor de lo escrito en el input
  };

  const onSearch = () => {
    //al darle click al boton se ejecutara OnSearch
    dispatch(getCountryByName(name)); //dispatch a getCountryByName y le pasamos el estado local name
    setSearchValue(""); //seteamos el estado local para limpiar el input
  };

  return (
    <div className={style.container}>
      <input
        type="search"
        placeholder="Nombre del Pais"
        className={style.input}
        value={searchValue} //como valor asigno el estado local
        onChange={handleChange}
      />
      <button className={style.button} onClick={onSearch}>
        Buscar
      </button>

      <h1>Filtrar por Continente:</h1>
      <select onChange={handleFilterByContinent} name="Continente">
        <option key="default" value="Todos">
          Seleccione un Continente
        </option>
        <option value="Todos">Todos</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="South America">America del Sur</option>
        <option value="North America">America del Norte</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antartida</option>
      </select>

      <h1>Ordenar Alfabeticamente:</h1>
      <select onChange={handleAlphabeticalOrder}>
        <option key="default" value="seleccion">
          Seleccione un Orden
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <h1>Ordenar por poblacion:</h1>
      <select onChange={handlePopulationOrder}>
        <option key="default" value="seleccion">
          Seleccione un Orden
        </option>
        <option value="mayor">Mayor Poblacion</option>
        <option value="menor">Menor Poblacion</option>
      </select>

      <h1>Filtrar por Actividad</h1>
      <select onChange={handleFilterByActivity} name="Orden por Actividad">
        <option key="default" value="todos">
          Seleccione una actividad
        </option>
        <option value="todos">Todos</option>
        {/* si actividades es un array lo mapeamos y renderizamos un option por cada actividad con el nombre de cada actividad */}
        {Array.isArray(activities)
          ? activities.map((actividad) => (
              <option key={actividad.id} value={actividad.nombre}>
                {actividad.nombre}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

export default Filter;
