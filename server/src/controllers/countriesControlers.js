const { conn } = require('../db');
const { Op } = require("sequelize");
const { Country, Activity } = conn.models

const getAllCountries = async () => {
  const allCountries = await Country.findAll({attributes: ["nombre","id","imagen","continente","poblacion"],
include:[{model:Activity,attributes:["nombre"],through:{attributes:[]}}]
});
  return allCountries;
}

const getCountryByName = async (nombre) =>{
  //trae el pais por nombre aunque este con minuscula o mayuscula
    const pais = await Country.findAll({where: {nombre:{ [Op.iLike]: `%${nombre}%`}}});
    return pais;
}

const countryPorId = async (id) => {
  //traemos el pais que coincida el id
   const country =  await Country.findOne({
  where: {id: id},
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

