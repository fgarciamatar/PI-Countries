const { getAllCountries, getCountryByName, countryPorId } = require("../controllers/countriesControlers");

const getCountries = async (req, res) => {//Trae todos los paises 
    try {  
        const { name } = req.query; //recibimos el nombre por query
        if(!name){ //si no hay query
            // NIY: Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.Utilizamos el método findAll() para obtener todos los países
            const paises = await getAllCountries(); // paises contendrá un arreglo de objetos, donde cada objeto es un país con toda su información
            res.status(200).send(paises)
        }else{ //si hay query
            const paisByname = await getCountryByName(name)//traemos solo el pais por nombre
            res.status(200).send(paisByname);
        }
       
      } catch (error) {
        console.error('Error al obtener los países:', error);
       res.status(400).send(error);
      }
}
const  getCountryByID = async (req, res) => {
    //NIY: Obtiene el detalle de un Pais
    const { id } = req.params;  //recibimos el id por params
    const paisCaps = id.toUpperCase(); //mayuscula
    try {
     const pais = await countryPorId(paisCaps);//controller countryPorId
     res.status(200).send(pais);
    } catch (error) {
        res.status(500).json({ error:` No se encontraron países con ese código: ${error.message}` }); 
    }
}


module.exports = {
    getCountries,
    getCountryByID
}