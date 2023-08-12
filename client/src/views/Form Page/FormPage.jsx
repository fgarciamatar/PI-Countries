import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./FormPage.module.css";
import axios from "axios";
import validation from "./validation";

const FormPage = () => {
  const stateCountries = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
  });

  const [paisesData, setPaisesData] = useState({
    countries: [],
  });

  const [errors, setErrors] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validation({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/activities", form)
      .then((res) => alert(res.data))
      .catch((res) => alert(res.data));
  };

  const handleSelectCountries = (event) => {
    const selectedCountryId = event.target.value;

    // Buscar el país seleccionado en la lista completa de países usando su ID
    const selectedCountry = stateCountries.find(
      (country) => country.countryId === selectedCountryId
    );

    if (selectedCountry) {
      setForm({
        ...form,
        countries: [...form.countries, selectedCountryId],
      });
      setPaisesData({
        ...paisesData,
        countries: [...paisesData.countries, selectedCountry],
      });

      setErrors(
        validation({
          ...form,
          countries: [...form.countries, selectedCountry],
        })
      );
    }
  };

  
  


  return (
    <form onSubmit={submitHandler} className={style.formContainer}>
      <div className={style.container}>
        <h1>New Activity</h1>
      </div>
      <div className={style.container}>
        <label>Nombre</label>
        <input
          type="text"
          value={form.nombre}
          onChange={changeHandler}
          name="nombre"
        />
        {errors.nombre ? <span>{errors.nombre}</span> : null}
      </div>
      <div className={style.container}>
        <label>Dificultad</label>
        <input
          type="range"
          min="1"
          max="5"
          value={form.dificultad}
          onChange={changeHandler}
          name="dificultad"
        />
        {errors.dificultad ? <span>{errors.dificultad}</span> : null}
      </div>
      <div className={style.container}>
        <label>Duracion</label>
        <input
          type="time"
          value={form.duracion}
          onChange={changeHandler}
          name="duracion"
        />
        {errors.duracion ? <span>{errors.duracion}</span> : null}
      </div>
      <div className={style.container}>
        <label>Temporada:</label>
        <select
          onChange={changeHandler}
          value={form.temporada}
          name="temporada"
        >
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
        {errors.temporada ? <span>{errors.temporada}</span> : null}
      </div>
      <div className={style.container}>
        <option value="" disabled>
          Selecciona el Pais
        </option>
        <select onChange={handleSelectCountries} value={form.pais}>
          {stateCountries?.map((pais) => {
            return (
              <option
                key={pais.countryId}
                value={pais.countryId}
                name={pais.nombre}
              >
                {pais.nombre}
              </option>
            );
          })}
        </select>
        {errors.countries ? <span>{errors.countries}</span> : null}
      </div>
        
      <div className={style.ContainerCardPais}>
      {paisesData.countries?.map((pais) => {
        return (
          <div key={pais.countryId} className={style.cardPais}>
           
            <h1>{pais.nombre}</h1>
            <img src={pais.imagen} alt="" />
          </div>
        );
      })}
      </div>
   

      <button type="submit" className={style.botonSubmit}  onClick={() => onDeleteSelection(country)}>SUBMIT</button>
    </form>
  );
};

export default FormPage;
