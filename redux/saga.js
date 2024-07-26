import {call, put, take, takeEvery} from "redux-saga/effects"
import axios from "axios";
import { GET_VILLA_FAILURE, GET_VILLA_FETCH, GET_VILLA_SUCCESS } from "./actions";
import { API } from "@/config/api";


const villasFetch = async()=>{
    return axios.post(API,{
        location: {
            type: "city",
            city: "",
            locality: []
        }
    })
     .then((res)=> res.data).catch((error)=> {throw error})
};


function* getVillas(){
    try {
        const villas = yield call(villasFetch)
        yield put({type:GET_VILLA_SUCCESS, villas})
    } catch (error) {
        yield put({type:GET_VILLA_FAILURE, error});
    }
}


export function* rootSaga(){
    yield take(GET_VILLA_FETCH);
    yield call(getVillas)
}