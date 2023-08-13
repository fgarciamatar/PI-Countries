const { conn } = require('../db');
const { Country, Activity } = conn.models

const createActivity = async ( { nombre, dificultad, duracion, temporada, countries}) => {
let newActividad = await Activity.create( { nombre, dificultad, duracion, temporada, countries});
countries.forEach(country => {
  newActividad.addCountry(country);
})
}

const getActivities = async () => {
    const actividades = await Activity.findAll({include: Country});
    return actividades;
}
const getCountries = async (countries) => {
    const countriesEnc = Country.findAll({
        where: {
          id: countries,
        },
      });
      return countriesEnc;
}

module.exports = {
    createActivity,
    getActivities,
    getCountries
}