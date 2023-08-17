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
  countries: [],//guaradamos todos los paises
  country: [],//guardamos el pais  traido por id para el detail
  allCountries: [],//estado alternativo a countries(guaradamos todos los paises)
  activities: []//guaradamos todas las actividades
};

const rootReducer = (state = initialState, action) => {
  let activitiesCountries = [];
  switch (action.type) {
    case GET_COUNTRIES: //traemos todos los paises al estado global
      return { ...state, countries: action.payload, allCountries: action.payload };
           //llenamos countries y allCountries con todos los paises
    case GET_COUNTRY:
      return { ...state, country: action.payload };//returnamos el estado modificando  countries a el pais traido por id
      
    case GET_COUNTRY_BY_NAME:
      return { //returnamos el estado modificando  countries a el pais traido por nombre
        ...state,
        countries: action.payload,//pais buscado por nombre
      };

    case GET_ACTIVITIES://returnamos el estado modificando activities por las actividades
      return { ...state, activities: action.payload };

    case CREATE_ACTIVITY: //returnamos el estado modificando activities por  todo lo que tenia + la actividad creada
      return {...state, activities: action.payload}

    case FILTER_BY_CONTINENT:
   
      const paises = state.allCountries.filter(//filtramos el estado alternativo (si el continente === al continente buscado)
        (pais) => pais.continente === action.payload
      );
       if(action.payload === "Todos")return {...state, countries: [...state.allCountries]}// Todos--> returna el estado modif countries con el estado alt 
       else return {...state, countries: paises} //un continente --> returna el estado modif country con los paises filtrados
      
    case FILTER_BY_ACTIVITY:
      const todosLosPaises = state.allCountries; // a todosLosPaises le asignamos el estado allCountries
      activitiesCountries = todosLosPaises.filter(country =>
        country.Activities.some(activity => activity.nombre === action.payload)
      ); //activitiesCountries = paises filtrados (si en country.Activities hay una actividad === a la actividad pasada por payload)

      // console.log(activitiesCountries);
      // console.log(state.countries);
      return action.payload === "todos"
        ? { ...state, countries: [...state.allCountries] }//si es todos returnamos el estado modificando countries por allCountries (seria countries pero sin modificacion)
        : {
            ...state,
            countries: activitiesCountries,
          };//si NO es todos , returnamos el estado modificando countries por los paises coincidentes 
     
    case ALPHABETICAL_ORDER:
      if(action.payload === "asc"){ //si es asc
        state.countries.sort(function (a, b) {
          if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
              return 1;
          }
          if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
              return -1;
          }
          return 0;
      })
      }else{ //si es desc
        state.countries.sort(function (a, b) {
          if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
              return -1;
          }
          if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
              return 1;
          }
          return 0;
      })}
     return {...state, countries: [...state.countries]} //returnamos el estado modificando countries con countries ordenado
     
      case POPULATION_ORDER: //state.countries.poblacion
      if(action.payload === "menor"){//si es menor a mayor
        state.countries.sort(function (a, b) {
          if (a.poblacion > b.poblacion)return 1;
          if (a.poblacion < b.poblacion)return -1;
          return 0;
      })
      }else{// si es mayor a menor
        state.countries.sort(function (a, b) {
          if (a.poblacion > b.poblacion) return -1;
          if (a.poblacion < b.poblacion) return 1;
          return 0;
      })}
     return {...state, countries: [...state.countries]} //returna el estado modificando countries por countries ordenado

    default:
      return { ...state };
  }
};
export default rootReducer;
