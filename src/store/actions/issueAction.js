import {
  GET_CLOSED_ISSUES,
  GET_ISSUES,
  GET_ISSUES_INFO,
  GET_OPEN_ISSUES,
  GET_SORTED_DATA,
  SET_ISSUES,
  SET_ISSUES_INFO,
  SET_OPEN_ISSUES,
} from "../../redux/types/issue.types.constant";


export const getIssuesInfo = () => {
  return {
    type: GET_ISSUES_INFO,
  };
};

export const setIssuesInfo = (data) => {
  return {
    type: SET_ISSUES_INFO,
    payload: data,
  };
};

export const getIssues = (data) => {
  return {
    type: GET_ISSUES,
    payload: data,
  };
};
export const setIssues = (data) => {
  return {
    type: SET_ISSUES,
    payload: data,
  };
};
export const getOpenIssues = (data) => {
  return {
    type: GET_OPEN_ISSUES,
    payload: data,
  };
};
export const getClosedIssues = (data) => {
  return {
    type: GET_CLOSED_ISSUES,
    payload: data,
  };
};
export const getSortedData = (data) => {
  return {
    type: GET_SORTED_DATA,
    payload:data,
  };
};


