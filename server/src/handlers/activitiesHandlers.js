const { conn } = require('../db');
const { createActivity, getActivities, getCountries } = require("../controllers/activitiesControlers")

const postActivity = async (req, res) => {
  try {
    const { nombre, dificultad, duracion, temporada, countries } = req.body;

    if (!nombre || !dificultad || !duracion || !temporada || !countries) {
      return res.status(400).json({ error: 'Faltan datos de la actividad' });
    }

    // Valida los datos aquí si es necesario.

    // Crea la actividad en BDD
    const createdActivity = await createActivity(nombre, dificultad, duracion, temporada, countries);
    console.log("create",createActivity);
    res.status(200).json({ message: "Actividad Creada exitosamente" });

  } catch (error) {
    console.error(error); // Registra el error para su posterior análisis.
    res.status(500).json({ error: 'No se pudo crear la actividad' });
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
//   "nombre": "Senderismo",
//   "dificultad": 3,
//   "duracion": 2,
//   "temporada": "Invierno",
//   "countries": ["KEN", "ARG", "USA"]
// }

