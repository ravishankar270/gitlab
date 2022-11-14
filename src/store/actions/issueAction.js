import { GET_ISSUES, SET_ISSUES } from "../../redux/types/issue.types.constant";

export const getIssues=()=>{
    return {
        type:GET_ISSUES,
        
    }
}
export const setIssues=(data)=>{
    return {
        type:SET_ISSUES,
        payload:data
    }
}