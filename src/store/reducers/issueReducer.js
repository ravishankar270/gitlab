import { GET_ISSUES, SET_ISSUES, SET_OPEN_ISSUES,SET_CLOSED_ISSUES } from "../../redux/types/issue.types.constant";

const initialState={
    issues:[],
    noOfIssues:0
}

export const issueReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_ISSUES:
            return{
                ...state,
                issues:action.payload
            }
        case SET_OPEN_ISSUES:
            return{
                ...state,
                issues:action.payload
            }
        case SET_CLOSED_ISSUES:
            return{
                ...state,
                issues:action.payload
            }
        default:
            return state
    }
}