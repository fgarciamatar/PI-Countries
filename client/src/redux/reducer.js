import {
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_ACTIVITIES,
  FILTER_BY_CONTINENT,
  GET_COUNTRY_BY_NAME,
  ALPHABETICAL_ORDER,
  POPULATION_ORDER,
  FILTER_BY_ACTIVITY,
  CREATE_ACTIVITY

} from "./actions";

const initialState = {
  countries: [],
  
  country: [],
  allCountries: [],
  activities: []
};

const rootReducer = (state = initialState, action) => {
  let activitiesCountries = [];
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload, allCountries: action.payload };
    case GET_COUNTRY:
      return { ...state, country: action.payload };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case CREATE_ACTIVITY:
      return {...state, activities: action.payload}

    case FILTER_BY_CONTINENT:
   
      const paises = state.allCountries.filter(
        (pais) => pais.continente === action.payload
      );
       if(action.payload === "Todos")return {...state, countries: [...state.allCountries]}
       else return {...state, countries: paises} 
      
    case FILTER_BY_ACTIVITY:
      activitiesCountries = state.countries.filter(country =>
        country.Activities.some(activity => activity.nombre === action.payload)
      );


      console.log(activitiesCountries);
      console.log(action.payload);
      return action.payload === "todos"
        ? { ...state, countries: [...state.allCountries] }
        : {
            ...state,
            countries: activitiesCountries,
          };
     
    case ALPHABETICAL_ORDER:
      if(action.payload === "asc"){
        state.countries.sort(function (a, b) {
          if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
              return 1;
          }
          if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
              return -1;
          }
          return 0;
      })
      }else{
        state.countries.sort(function (a, b) {
          if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
              return -1;
          }
          if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
              return 1;
          }
          return 0;
      })}
     return {...state, countries: [...state.countries]}
     
      case POPULATION_ORDER: //state.countries.poblacion
      if(action.payload === "menor"){
        state.countries.sort(function (a, b) {
          if (a.poblacion > b.poblacion)return 1;
          if (a.poblacion < b.poblacion)return -1;
          return 0;
      })
      }else{
        state.countries.sort(function (a, b) {
          if (a.poblacion > b.poblacion) return -1;
          if (a.poblacion < b.poblacion) return 1;
          return 0;
      })}
     return {...state, countries: [...state.countries]}

    default:
      return { ...state };
  }
};
export default rootReducer;
