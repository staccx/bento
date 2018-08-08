import axios from "axios"

const axiosInstance = axios.create({ baseURL: "/api" })

export const fetchCases = () =>
  axiosInstance
    .get("/flows")
    .then(res => res.data)
    .catch(console.error)

export const fetchCaseDetails = caseId =>
  axiosInstance
    .get("/flows/" + caseId)
    .then(res => res.data)
    .catch(console.error)

export const fetchTasks = caseId =>
  axiosInstance
    .get("/flows/" + caseId + "/tasks")
    .then(res => res.data)
    .catch(console.error)
