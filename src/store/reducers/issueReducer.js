import { GET_ISSUES, SET_ISSUES } from "../../redux/types/issue.types.constant";

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
        default:
            return state
    }
}