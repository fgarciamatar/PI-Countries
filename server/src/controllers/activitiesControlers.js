const { conn } = require('../db');
const { Country, Activity } = conn.models

const createActivity = async ( { nombre, dificultad, duracion, temporada, countries}) => {
  //creamos la actividad turistica (tabla creada en activity)
let newActividad = await Activity.create( { nombre, dificultad, duracion, temporada, countries});
countries.forEach(country => { 
  newActividad.addCountry(country);//a laactividad le agregamos una propiedad countries con los paises correspondiente a la relacion
})
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