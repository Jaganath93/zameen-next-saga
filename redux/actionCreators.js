import { GET_VILLA_FETCH, LOCATION, NO_IMAGE } from "./actions";

export const setLocation = (value)=>({
   type: LOCATION,
   payload: value
});


export const setNoImage = ()=>({
    type: NO_IMAGE
});


export const getVillaFetchAction = ()=>{
    return {type: GET_VILLA_FETCH}
}