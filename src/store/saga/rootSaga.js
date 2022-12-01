import { takeLatest,all,fork } from "redux-saga/effects";
import { authenticate } from "./handlers/auth";
import { LOGIN } from "../../redux/types/auth.types.constant";
import { getClosedIssues, getCountOfIssues, getIssues, getOpenIssues,getSortedData } from "./handlers/getIssues";
import { GET_CLOSED_ISSUES, GET_ISSUES, GET_ISSUES_INFO, GET_OPEN_ISSUES, GET_SORTED_DATA} from "../../redux/types/issue.types.constant";
export function* loginSaga() {
 
  yield takeLatest(LOGIN, authenticate)
  
  
}

export function* getIssuesInfoSaga() {
 
  yield takeLatest(GET_ISSUES_INFO, getCountOfIssues)
  
  
}

export function* getIssuesSaga() {
 
  yield takeLatest(GET_ISSUES, getIssues)
  
  
}
export function* getOpenIssuesSaga() {
 
  yield takeLatest(GET_OPEN_ISSUES, getOpenIssues)
  
  
}
export function* getClosedIssuesSaga() {
 
  yield takeLatest(GET_CLOSED_ISSUES, getClosedIssues)
  
  
}
export function* getSortedDataSaga() {
 
  yield takeLatest(GET_SORTED_DATA,getSortedData)
  
  
}

export function* watcherSaga(){
  yield all([fork(loginSaga),fork(getIssuesInfoSaga),fork(getIssuesSaga),fork(getOpenIssuesSaga),fork(getClosedIssuesSaga),fork(getSortedDataSaga)])
}
