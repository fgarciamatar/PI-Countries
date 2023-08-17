const validation = (formState) => {
  let errors = {};

  //Nombre
  if (!formState.nombre) errors.nombre = "Por favor completa este campo";
  else if (formState.nombre.length > 20)
    errors.nombre =
      "El nombre de la Actividad no puede superar los 20 caracteres ";
  else if (/\d/.test(formState.nombre))
    errors.nombre = "El nombre de la Actividad no puede contener numeros";
  //Dificultad
  if (!formState.dificultad)
    errors.dificultad = "Por favor completa este campo";
  if (!/^[1-5]$/.test(formState.dificultad))
    errors.dificultad = "La dificultad debe ser del 1 al 5";
  //Duracion
  if (!formState.duracion) errors.duracion = "Por favor completa este campo";
  //Temporada
  if (!formState.temporada) errors.temporada = "Por favor completa este campo";
  //Paises
  if (formState.countries.length === 0)
    errors.countries = "Debe seleccionar al menos un país";
//si hay errores los guarda en la propiedad adecuada a cada error
    const hasErrors = Object.keys(errors).length === 0;//si el objeto errors tiene propiedades-->true, por lo tanto no habria errores

    if (hasErrors) {
      return true; // No hay errores
    } else {
      return errors; // Devolver el objeto de errores
    }
};
export default validation;


