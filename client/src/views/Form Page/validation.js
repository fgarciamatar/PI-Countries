const validation = (formState) => {
    let errors = {};

    //Nombre
    if(!formState.nombre) errors.nombre = "Por favor completa este campo";
    else if(formState.nombre.length > 20)errors.nombre = "El nombre de la Actividad no puede superar los 20 caracteres "
    else if(/\d/.test(formState.nombre))errors.nombre = "El nombre de la Actividad no puede contener numeros"
   //Dificultad
   if(!formState.dificultad) errors.dificultad = "Por favor completa este campo";
   else if(formState.dificultad < 1 || formState.dificultad > 5 )errors.dificultad = "La dificultad debe ser del 1 al 5";
    //Duracion
    if(!formState.duracion) errors.duracion = "Por favor completa este campo";
    



}
export default validation;