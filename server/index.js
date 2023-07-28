const server = require("./src/server");
const { conn } = require('./src/db.js');
const countriesLoader = require("./src/utils/countriesLoader")
const PORT = 3001;

const { Country } = conn.models

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  countriesLoader(Country);
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
