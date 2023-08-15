import style from "./Filter.module.css";
import { useDispatch, useSelector} from "react-redux";
import { useState } from 'react';
import { filterByContinent, filterByActivity, getCountryByName, alphabeticalOrder, populationOrder} from "./../../redux/actions"

const Filter = () => {
  const activities = useSelector((state) => state.activities);
// console.log(activities);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [searchValue, setSearchValue] = useState(''); //estado para el input de buscar por nombre
  
  const handleFilterByContinent = (event) => {
    dispatch(filterByContinent(event.target.value))
  }

  const handleFilterByActivity = (event) => {
    dispatch(filterByActivity(event.target.value))
  }
  
  const handleAlphabeticalOrder = (event) => {
    dispatch(alphabeticalOrder(event.target.value))
  }
  const handlePopulationOrder = (event) => {
      dispatch(populationOrder(event.target.value))
  }

  const handleChange = (event)=>{
    setSearchValue(event.target.value);
    setName(event.target.value);
  }

  const onSearch = () => {
    dispatch(getCountryByName(name))
    setSearchValue('');
  }

  return (
    <div  className={style.container}>

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
     <div className={style.container}>
  <h1>Filtrar por Actividad</h1>
  <select onChange={handleFilterByActivity} name="Orden por Actividad">
    <option key="default"  value="todos">
      Seleccione una actividad
    </option >
    <option value="todos">Todos</option>
    {
  Array.isArray(activities) ? 
    activities.map((actividad) => (
      <option key={actividad.id} value={actividad.nombre}>
        {actividad.nombre}
      </option>
    )) 
  : ""
}

  </select>
</div>

      
    </div>
  );
};

export default Filter;
