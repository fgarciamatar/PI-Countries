const { getAllCountries, getCountryByName, countryPorId } = require("../controllers/countriesControlers");
const getCountries = async (req, res) => {
    try {  //   !! Tiene que incluir los datos de las actividades turísticas asociadas a este país.!!
        const { name } = req.query;
        if(!name){
            // NIY: Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.Utilizamos el método findAll() para obtener todos los países
            const paises = await getAllCountries(); // paises contendrá un arreglo de objetos, donde cada objeto es un país con toda su información
            res.status(200).send(paises)
        }else{
            const paisByname = await getCountryByName(name)
            res.status(200).send(paisByname);
        }
       
      } catch (error) {
        console.error('Error al obtener los países:', error);
       res.status(400).send(error);
      }
}
const  getCountryByID = async (req, res) => {
    //Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. 
    //(No es necesario que sea una coincidencia exacta).
    //Debe poder buscarlo independientemente de mayúsculas o minúsculas
    //NIY: Obtiene el detalle de un Pais
    const { countryId } = req.params; 
    console.log(countryId);
    const paisCaps = countryId.toUpperCase();
    try {
     const pais = await countryPorId(paisCaps);
     res.status(200).send(pais);
    } catch (error) {
        res.status(500).json({ error:` No se encontraron países con ese código: ${error.message}` }); 
    }
}


module.exports = {
    getCountries,
    getCountryByID
}