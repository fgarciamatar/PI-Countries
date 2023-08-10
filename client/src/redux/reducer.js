import { GET_COUNTRIES, GET_COUNTRY, FILTER, GET_COUNTRY_BY_NAME} from "./actions";
const initialState = { 
    countries:[],
    country:[],
    countriesFilter:[],
};

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
            return {...state, countries: action.payload}
            case GET_COUNTRY:
            return {...state, country: action.payload}
            case FILTER:
      const paises = state.countries.filter(
        (pais) => pais.continents === action.payload
      );
      return action.payload === "Todos"
        ? { ...state, countriesFilter: [...state.countries] }
        : {
            ...state,
            countriesFilter: paises,
          };
          case GET_COUNTRY_BY_NAME:
            return {
              ...state,
              countries: action.payload
          }
        default:
            return {...state};
    }
}
export default rootReducer;