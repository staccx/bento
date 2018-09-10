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

export const uploadFile = file => {
  const bodyFormData = new FormData()
  bodyFormData.append("file", file) // file is an element from event.target.files

  return axiosInstance
    .post("/files", bodyFormData)
    .then(res => res.data)
    .catch(console.error)
}

export const setTaskCompleted = (taskId, uploadedFileId) =>
  axiosInstance
    .post("/tasks/" + taskId + "/complete", {
      uri: "/api/files/" + uploadedFileId
    })
    .then(res => res.data)
    .catch(console.error)

export const simulateNewCase = () =>
  axiosInstance
    .post("/simulation")
    .then(res => res.data)
    .catch(console.error)
