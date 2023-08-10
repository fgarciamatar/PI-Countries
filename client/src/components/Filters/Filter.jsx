import style from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { filterByContinent, getCountryByName } from "./../../redux/actions"

const Filter = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  
  const handleFilterByContinent = (event) => {
    dispatch(filterByContinent(event.target.value))
  }

  const handleChange = (event)=>{
    setName(event.target.value);
  }

  const onSearch = () => {
    dispatch(getCountryByName(name))
  }

  return (
    <div  className={style.container}>
       <input
              type="search"
              placeholder="Nombre del Pais"
              className={style.input}
              onChange={handleChange}
            />
              <button className={style.button} onClick={onSearch}>
              Buscar
            </button>
      <h1>Ordenar por Continente:</h1>
      <select onChange={handleFilterByContinent} name="Continente">
        <option value="Todos">Todos</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="South America">America del Sur</option>
        <option value="North America">America del Norte</option>
        <option value="Oceania">Oceania</option>
      </select>
      <h1>Ordenar Alfabeticamente:</h1>
      <select>
      <option value="">A-Z</option>
      <option value="">Z-A</option>
      </select>
      <h1>Ordenar por Actividad:</h1>
      <select>
      <option value="">afas</option>
      <option value="">asd</option>
      </select>
      <h1>Ordenar por poblacion:</h1>
      <select>
      <option value="">Mayor Poblacion</option>
      <option value="">Menor Poblacion</option>
      </select>
    </div>
  );
};

export default Filter;
