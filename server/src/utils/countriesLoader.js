const axios = require("axios");

const countriesLoader = async (Country) => {
    const URL = "http://localhost:5000/countries"; //api
    try {
        const response = await axios.get(URL);//peticion a la api
        const countries = response.data; //paises traidos de la api

        const countriesData = countries.map((pais) => {
            return {//traemos los datos que utilizaremos y los guardamos en countriesData
                id:pais.cca3,
                nombre: pais.name.common,
                imagen: pais.flags.png,
                continente: pais.continents[0],
                capital: pais.capital ? pais.capital[0] : "-",
                subRegion: pais.subregion,
                area: pais.area,
                poblacion: pais.population
            }
        })
       const countriesCreated = await Country.bulkCreate(countriesData);//creamos los registros con todos los paises en la BDD
    //    console.log("se agregaron correctamente los countries a la BDD");
       return countriesCreated; 
    } catch (error) {
        console.error("Error fetching data:",error);
        throw error;
    }
}
module.exports = countriesLoader;