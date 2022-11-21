import axiosInstance from "./AxioInstance";

//different api calls to db json server
export function requestCountOfIssues() {
  return axiosInstance.get("issue_page_info")
}
export function requestGetIssues(data) {
  return axiosInstance.get(`issues?_page=${data.page}&_limit=${data.limit}`)
}
export function requestOpenIssues(data) {
  return axiosInstance.get(`open_issues?_page=${data.page}&_limit=${data.limit}`)
}
export function requestClosedIssues(data) {
  return axiosInstance.get(`closed_issues?_page=${data.page}&_limit=${data.limit}`)
}
