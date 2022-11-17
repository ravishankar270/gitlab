import {  LOGOUT, SET_USER } from "../../redux/types/auth.types.constant";

const initialState={
    auth:false,
    username:null,
    email:null,
    avatarUrl:null
}
export default function authReducer(state=initialState,action){
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                auth:true,
                username:action.payload.username,
                email:action.payload.email,
                avatarUrl:action.payload.avatarUrl
            }
        case LOGOUT:
            return {
                ...state,
                auth:false,
                username:null,
                email:null,
                avatarUrl:null
            }
        default:
        return state
    }
}