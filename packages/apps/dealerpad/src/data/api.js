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

export const uploadFile = fileContents => {
  const bodyFormData = new FormData()
  bodyFormData.set("aaa", fileContents)

  return axiosInstance
    .post("/files", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
    .then(res => res.data)
}

export const setTaskCompleted = (flowId, taskId, uploadedFileId) =>
  axiosInstance
    .post("/flows/" + flowId + "/tasks/" + taskId + "/complete", {
      uri: "/api/files/" + uploadedFileId
    })
    .then(res => res.data)

