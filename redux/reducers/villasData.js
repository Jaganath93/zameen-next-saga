import { GET_VILLA_FAILURE, GET_VILLA_SUCCESS } from "../actions";


export const villasData = (state=[],action)=>{
    switch (action.type) {
        case GET_VILLA_SUCCESS:
            return [...state,(action.villas)];

        case GET_VILLA_FAILURE:
            return [...state,(action.error)]    
    
        default:
            return state;
    }
}