import { GET_COUNTRIES, GET_COUNTRY } from "./actions";
const initialState = { 
    countries:[]
};

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
            return {...state, countries: action.payload}
            case GET_COUNTRY:
            return {...state, countries: action.payload}
        default:
            return {...state};
    }
}
export default rootReducer;