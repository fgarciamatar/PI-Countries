import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER";
export const POPULATION_ORDER = "POPULATION_ORDER";


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
    console.log(json.data);
    return dispatch({
      type: "GET_COUNTRY_BY_NAME",
      payload: json.data,
    });
  };
}

export const filterByContinent = (continente) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continente,
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
    payload: orden
  }
}
