const server = require("./src/server");
const { conn } = require('./src/db.js');//conexion con la BDD
const countriesLoader = require("./src/utils/countriesLoader") //funcio para cargar los datos de los paises en la BDD
const PORT = 3001;

const { Country } = conn.models //obtenemos el modelo Country
//alter:true
conn.sync({ force: true }).then(() => { //sincronizamos la BDD
server.listen(PORT, () => {//se inicia el servidor
  countriesLoader(Country); //se cargan lo paises en Country (trae los paises de la api a  la BDD)
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
