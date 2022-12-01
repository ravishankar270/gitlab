import {
  SET_ISSUES,
  SET_ISSUES_INFO
} from "../../redux/types/issue.types.constant";

const initialState = {
  issues: [],
  noOfOpenIssues: 0,
  noOfCloseIssues: 0,
  noOfAllIssues: 0,

};

export const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISSUES_INFO:
      return {
        ...state,
        noOfOpenIssues: action.payload.openedIssues.count,
        noOfCloseIssues:action.payload.closedIssues.count,
        noOfAllIssues:action.payload.allIssues.count,
      };
    case SET_ISSUES:
      return {
        ...state,
        issues: action.payload,
      };
   
    default:
      return state;
  }
};
