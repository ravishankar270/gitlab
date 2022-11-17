import { GET_CLOSED_ISSUES, GET_ISSUES, GET_OPEN_ISSUES, SET_CLOSED_ISSUES, SET_ISSUES, SET_OPEN_ISSUES } from "../../redux/types/issue.types.constant";

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
export const getOpenIssues=()=>{
    return {
        type:GET_OPEN_ISSUES
    
    }
}
export const getClosedIssues=()=>{
    return {
        type:GET_CLOSED_ISSUES
       
    }
}
export const setOpenIssues=(data)=>{
    return {
        type:SET_OPEN_ISSUES,
        payload:data
    }
}
export const setClosedIssues=(data)=>{
    return {
        type:SET_CLOSED_ISSUES,
        payload:data
    }
}
