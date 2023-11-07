const { conn } = require('../db');
const { Country, Activity } = conn.models

const createActivity = async (nombre, dificultad, duracion, temporada, countries) => {
  try {
    // Valida si "countries" es un arreglo no nulo y tiene al menos un país.
 

    // Crea la actividad en la base de datos.
    const newActividad = await Activity.create({
      nombre,
      dificultad,
      duracion,
      temporada,
      countries
    });

    // Asociar países a la actividad.
    await newActividad.addCountries(countries);

    return newActividad;
  } catch (error) {
    throw error;
  }
}


const getActivities = async () => { //trae todas las actividades que incluyan Country
    const actividades = await Activity.findAll({include: Country});
    return actividades;
}

// const getCountries = async (countries) => {
//     const countriesEnc = Country.findAll({
//         where: {
//           id: countries,
//         },
//       });
//       return countriesEnc;
// }

module.exports = {
    createActivity,
    getActivities,
    // getCountries
}