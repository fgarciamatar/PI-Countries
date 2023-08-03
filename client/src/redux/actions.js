import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";

export const getCountries = () => {
    return async function(dispatch){
        const dataCountries = await axios.get("http://localhost:3001/countries")
        const paises = dataCountries.data;
        dispatch({ type: GET_COUNTRIES, payload: paises});
    }
}

export const getCountry = (idPais) => {
    return async function(dispatch){
        const dataCountry = await axios.get(`http://localhost:3001/countries/${idPais}`);
        const pais = dataCountry.data;
        dispatch({ type: GET_COUNTRY, payload: pais});
    }
}