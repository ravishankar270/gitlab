import axios from "axios";

export function requestGetIssues() {
  return axios.get("http://localhost:3001/issues",{
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
}
