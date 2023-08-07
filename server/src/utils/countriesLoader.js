const axios = require("axios");

const countriesLoader = async (Country) => {
    const URL = "http://localhost:5000/countries";
    try {
        const response = await axios.get(URL);
        const countries = response.data;

        const countriesData = countries.map((pais) => {
            return {
                countryId:pais.cca3,
                nombre: pais.name.common,
                imagen: pais.flags.png,
                continente: pais.continents[0],
                capital: pais.capital ? pais.capital[0] : "-",
                subRegion: pais.subregion,
                area: pais.area,
                poblacion: pais.population
            }
        })
       const countriesCreated = await Country.bulkCreate(countriesData);
    //    console.log("se agregaron correctamente los countries a la BDD");
       return countriesCreated;
    } catch (error) {
        console.error("Error fetching data:",error);
        throw error;
    }
}
module.exports = countriesLoader;