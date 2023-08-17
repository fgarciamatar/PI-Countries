import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux/actions";
import style from "./FormPage.module.css";
import validation from "./validation";

const FormPage = () => {
  const stateCountries = useSelector((state) => state.allCountries);//traemos el estado global alternativo
  const dispatch = useDispatch();


  const [form, setForm] = useState({//estado local para guardar lo escrito en  el formulario
    nombre: "",
    dificultad: 0,
    duracion: 0,
    temporada: "",
    countries: [],
  });

  const [paisesData, setPaisesData] = useState({//estado local para guardar los paises seleccionados y mostrarlos en un contenedor
    countries: [],
  });

  const [errors, setErrors] = useState({//estado local para guardar los errores que vienen de validation 
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: "", //si exite algun error estos se muestran en un span debajo de cada input correspondiente
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    let value = event.target.value;

    if(property === "duracion") value = +value;
    if(property === "dificultad") value = +value;//convertimos duracion y dificultad en enteros

    setErrors(validation({ ...form, [property]: value }));// seteamos el error con lo que recibimos en la validation
    setForm({ ...form, [property]: value });//seteamos el form
  };

  const submitHandler = async (event) => {//al hacer clicl en el boton submit
    event.preventDefault();
    if(errors === true) dispatch(createActivity(form)); //si errors no tiene errores dispatcha createActivity (crea la nueva actividad en la BDD)
    else alert("No se pudo crear, por favor complete todo el formulario")//si hay errores en errors , se lanza un alert
  }
 

  const handleSelectCountries = (event) => {//funcion para seleccionar un pais
    const selectedCountryId = event.target.value; //tomamos el/los pais/es seleccionado

    // Buscar el país seleccionado en la lista completa de países usando su ID
    const selectedCountry = stateCountries.find(
      (country) => country.id === selectedCountryId
    );

    if (selectedCountry) { //si se encontraron paises...
      setForm({//agregamos a form  countries el pais  seleccionado
        ...form,
        countries: [...form.countries, selectedCountryId],
      });
      setPaisesData({//agregamos a paisesData  countries el pais  seleccionado
        ...paisesData,
        countries: [...paisesData.countries, selectedCountry],
      });

      setErrors(//agregamos a errors  countries el pais  seleccionado , para validarlo
        validation({
          ...form,
          countries: [...form.countries, selectedCountry],
        })
      );
    }
  };

  const onClose = (paisAEliminar) => {//funcion para cerrarla tarjeta del pais seleccionado
    const updatedFormCountries = form.countries.filter(
      (countryId) => countryId !== paisAEliminar.id //recorremos countries en el form y filtramos si: countryId === al id del pais a eliminar
    );
    const updatedPaisesData = paisesData.countries.filter(
      (country) => country.id !== paisAEliminar.id//recorremos countries en paisesData y filtramos si: country.Id === al id del pais a eliminar
    );

    setForm({ ...form, countries: updatedFormCountries });//modificamos form con la actualizacion de form (sacando el pais eliminado)
    setPaisesData({ ...paisesData, countries: updatedPaisesData });//modificamos paisesData con la actualizacion de paisesData (sacando el pais eliminado)
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
