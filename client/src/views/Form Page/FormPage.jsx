import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./FormPage.module.css";
import validation from "./validation";
import { createActivity } from "../../redux/actions";

const FormPage = () => {
  const stateCountries = useSelector((state) => state.allCountries);
const dispatch = useDispatch();


  const [form, setForm] = useState({
    nombre: "",
    dificultad: 0,
    duracion: 0,
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
    let value = event.target.value;

    if(property === "duracion") value = +value;
    if(property === "dificultad") value = +value;

    setErrors(validation({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
   dispatch(createActivity(form))
  }
 

  const handleSelectCountries = (event) => {
    const selectedCountryId = event.target.value;

    // Buscar el país seleccionado en la lista completa de países usando su ID
    const selectedCountry = stateCountries.find(
      (country) => country.id === selectedCountryId
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

  // const onClose = (paisAEliminar) => {
  //   const updatedCountries = paisesData.countries.filter(pais => pais.id !== paisAEliminar.id);
  //   setPaisesData({ ...paisesData, countries: updatedCountries });
   
  // };

  const onClose = (paisAEliminar) => {
    const updatedFormCountries = form.countries.filter(
      (countryId) => countryId !== paisAEliminar.id
    );
    const updatedPaisesData = paisesData.countries.filter(
      (country) => country.id !== paisAEliminar.id
    );

    setForm({ ...form, countries: updatedFormCountries });
    setPaisesData({ ...paisesData, countries: updatedPaisesData });
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
          // type="number"
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
          type="number"
          min="1"
          max="10"
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
        <label>
          Selecciona el Pais:
        </label>
        <select onChange={handleSelectCountries} value={form.pais}>
          {stateCountries?.map((pais) => {
            return (
              <option
                key={pais.id}
                value={pais.id}
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
            <div key={pais.id} className={style.cardPais}>
              <button className={style.botonCerrar} value={pais.countries}   onClick={() => onClose(pais)}>X</button>
              <h1>{pais.nombre}</h1>
              <img src={pais.imagen} alt="" />
            </div>
          );
        })}
      </div>

      <button type="submit" className={style.botonSubmit}>
        SUBMIT
      </button>
    </form>
  );
};

export default FormPage;
