import { useState } from "react";
import style from "./FormPage.module.css";
import axios from "axios";
import validation from "./validation";

const FormPage = () => {
  const [form, setForm] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: "",
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

    validation({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/activities", form)
      .then((res) => alert(res.data))
      .catch((res) => alert(res.data));
  };

  return (
    <form onSubmit={submitHandler} className={style.formContainer}>
      <div  className={style.container} >
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
        {errors.nombre && <span>{errors.nombre}</span>}
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
      </div>
      <div className={style.container}>
        <label>Duracion</label>
        <input
          type="time"
          value={form.duracion}
          onChange={changeHandler}
          name="duracion"
        />
      </div>
      <div className={style.container}>
        <label for="opciones">Temporada:</label>
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
      </div>
      <div className={style.container}>
        <label>Selecciona el Pais</label>
        <input
          type="text"
          value={form.pais}
          onChange={changeHandler}
          name="pais"
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default FormPage;
