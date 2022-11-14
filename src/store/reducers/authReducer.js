import {  LOGOUT, SET_USER } from "../../redux/types/auth.types.constant";

const initialState={
    auth:false,
    username:null,
    email:null,
}
export default function authReducer(state=initialState,action){
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                auth:true,
                username:action.payload.username,
                eamil:action.payload.email
            }
        case LOGOUT:
            return {
                ...state,
                auth:false,
                username:null,
                email:null
            }
        default:
        return state
    }
}