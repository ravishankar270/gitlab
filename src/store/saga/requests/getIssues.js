import axios from "axios";

export function requestGetIssues() {
  return axios.get("http://localhost:3001/issues")
}
export function requestOpenIssues() {
  return axios.get("http://localhost:3001/open_issues")
}
export function requestClosedIssues() {
  return axios.get("http://localhost:3001/closed_issues")
}
