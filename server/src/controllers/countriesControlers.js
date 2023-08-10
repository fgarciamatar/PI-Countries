const { conn } = require('../db');
const { Op } = require("sequelize");
const { Country, Activity } = conn.models

const getAllCountries = async () => {
  const allCountries = await Country.findAll();
  return allCountries;
}

const getCountryByName = async (nombre) =>{
    const pais = await Country.findAll({where: {nombre:{ [Op.iLike]: `%${nombre}%`}}});
    return pais;
}

const countryPorId = async (id) => {
   const country =  await Country.findOne({
  where: {countryId: id},
  include: {
    model: Activity,
    attributes: ["nombre", "dificultad", "duracion", "temporada" ]
  },
 });
   return country;
}

module.exports = {
    getAllCountries,
    getCountryByName,
    countryPorId
}

