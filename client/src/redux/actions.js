import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER";
export const POPULATION_ORDER = "POPULATION_ORDER";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export const getCountries = () => { //nos trae todos los paises al estado global
  return async function (dispatch) {
    const dataCountries = await axios.get("http://localhost:3001/countries");//traemos todos los paises
    const paises = dataCountries.data;
    dispatch({ type: GET_COUNTRIES, payload: paises });//returnamos la action type y lo recibido por la peticion
  };
};

export const getCountry = (idPais) => {
  return async function (dispatch) {
    const dataCountry = await axios.get(
      `http://localhost:3001/countries/${idPais}`//traemos el pais pasandole por params idPais
    );
    const pais = dataCountry.data; 
    dispatch({ type: GET_COUNTRY, payload: pais }); //returnamos la action type y lo recibido de la peticion
  };
};

export function getCountryByName(name) {//recibimos name 
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/countries?name=${name}`);//traemos el pais por nombre (pasado por query)
    return dispatch({//returnamos la action type y lo recibido de la peticion
      type: "GET_COUNTRY_BY_NAME", 
      payload: json.data,
    });
  };
}

export const getActivities = () => { 
  return async function (dispatch) {
    const dataActivity = await axios.get(`http://localhost:3001/activities`);//traemos las actividades y las guardamos en dataActivity

    const actividad = dataActivity.data;
    dispatch({ type: GET_ACTIVITIES, payload: actividad }); //hacemos dispatch pasandole la action type y las actividades
  };
};

export const createActivity = (payload) => {
  //crea una nueva actividad 
  return  async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/activities`,
        payload); //hacemos un post mandandole la nueva actividad
      const activity = response.data;
      alert("Actividad creada")
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: activity,
      })  //returnamos la action type y la actividad creada
      
    } catch (error) {
      alert(`No se pudo crear la actividad`)
    }
    
  };
};

export const filterByContinent = (continente) => {
  return { //returnamos la action type y el continente a buscar
    type: FILTER_BY_CONTINENT,
    payload: continente,
  };
};

export const filterByActivity = (actividad) => {
  return {//returnamos la action type y la actividad
    type: FILTER_BY_ACTIVITY,
    payload: actividad,
  };
};

export const alphabeticalOrder = (orden) => {
  return {//returnamos la action type y el payload con el orden (asc o dec)
    type: ALPHABETICAL_ORDER,
    payload: orden,
  };
};

export const populationOrder = (orden) => {
  return { //returnamos la action type y el payload con el orden (mayor o menor)
    type: POPULATION_ORDER,
    payload: orden,
  };
};
