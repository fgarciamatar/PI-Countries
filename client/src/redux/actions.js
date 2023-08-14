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

export const getCountries = () => {
  return async function (dispatch) {
    const dataCountries = await axios.get("http://localhost:3001/countries");
    const paises = dataCountries.data;
    dispatch({ type: GET_COUNTRIES, payload: paises });
  };
};

export const getCountry = (idPais) => {
  return async function (dispatch) {
    const dataCountry = await axios.get(
      `http://localhost:3001/countries/${idPais}`
    );
    const pais = dataCountry.data;
    dispatch({ type: GET_COUNTRY, payload: pais });
  };
};

export function getCountryByName(name) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
    return dispatch({
      type: "GET_COUNTRY_BY_NAME",
      payload: json.data,
    });
  };
}

export const getActivities = () => {
  return async function (dispatch) {
    const dataActivity = await axios.get(`http://localhost:3001/activities`);

    const actividad = dataActivity.data;
    dispatch({ type: GET_ACTIVITIES, payload: actividad });
  };
};

export const createActivity = (payload) => {
  
  return  async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/activities`,
        payload);
       alert(response.data);
      const activity = response.data;
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: activity,
      }) 
    } catch (error) {
      alert(`No se pudo crear la actividad`)
    }
    
  };
};

export const filterByContinent = (continente) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continente,
  };
};

export const filterByActivity = (actividad) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: actividad,
  };
};

export const alphabeticalOrder = (orden) => {
  return {
    type: ALPHABETICAL_ORDER,
    payload: orden,
  };
};

export const populationOrder = (orden) => {
  return {
    type: POPULATION_ORDER,
    payload: orden,
  };
};
