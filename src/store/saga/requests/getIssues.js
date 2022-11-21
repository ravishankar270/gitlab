import axiosInstance from "./AxioInstance";

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
