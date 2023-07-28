const { conn } = require('../db');
const { Country, Activity } = conn.models

const createActivity = async (data) => {
const newActividad = await Activity.create(data);
return newActividad;
}

const getActivities = async () => {
    const actividades = await Activity.findAll();
    return actividades;
}
const getCountries = async (countries) => {
    const countriesEnc = Country.findAll({
        where: {
          countryId: countries,
        },
      });
      return countriesEnc;
}

module.exports = {
    createActivity,
    getActivities,
    getCountries
}