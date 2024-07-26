import { LOCATION } from "../actions";


export const location = (state="Mysuru",action)=>{
    switch (action.type) {
        case LOCATION:
            return action.payload
    
        default:
            return state;
    }
}