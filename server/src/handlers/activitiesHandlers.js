const { conn } = require('../db');
const { createActivity, getActivities, getCountries } = require("../controllers/activitiesControlers")

const postActivity = async (req, res) => {
  //NIY: creara una actividad turística.
  try {
       const { nombre, dificultad, duracion, temporada, countries} = req.body; //trae todo por body
    
      if (!nombre || !dificultad || !duracion || !temporada || !countries)res.status(400).send('Faltan datos de la actividad');
    
      // Crear la actividad en BDD
    await createActivity({ nombre, dificultad, duracion, temporada, countries}); //controler
     // Obtener los países relacionados con la actividad a partir del array enviado en el body
      // if (countries && countries.length > 0) {
      //       // Buscar los países en la base de datos por sus ids y agregarlos a la actividad
      //       const countriesEncontrados = await getCountries(countries)
      //       await activityCreada.addCountries(countriesEncontrados);
      //   } 
     res.status(200).json("Actividad Creada exitosamente");

    } catch (error) {
  res.status(500).send({ error:`No se pudo crear la actividad`}); 
 }
}


const getActivity = async (req, res) => {
  //NIY: obtiene cada actividad turistica
  try {
    const actividades = await getActivities();//controler
    res.status(200).json(actividades);
  } catch (error) {
    res.status(500).json({ error:`No se pudo obtener las actividades:${error.message}` }); 
  }
}

module.exports = {
    postActivity,
    getActivity
}

//http://localhost:3001/activities
// {
//   "name": "Senderismo",
//   "difficulty": 3,
//   "duration": "02:30:00",
//   "season": "Summer",
//   "countries": ["KEN", "ARG", "USA"]
// }

