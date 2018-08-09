import { observable, action } from "mobx"
import {
  fetchCases,
  fetchCaseDetails,
  uploadFile,
  setTaskCompleted,
  fetchTasks
} from "../api"
import fileStatus from "../fileStatus"

class CaseStore {
  @observable loading = true
  @observable loadingCaseDetails = true
  @observable cases = []
  @observable currentCase = null

  getCase(caseId) {
    return this.cases.find(currentCase => currentCase.id === caseId)
  }

  @action
  async initialize() {
    this.loading = true
    this.cases = await fetchCases()
    this.loading = false
  }

  submitDocument(documentType, taskId, flowId) {
    return async fileContents => {
      console.log("got file", fileContents, fileContents.file)
      // uploadFile(fileContents)
      //   .then(({ id }) => setTaskCompleted(flowId, taskId, id))
      //   .then(res => res.data)
      //   .catch(console.error)
    }
  }

  @action
  async setCurrentCase(caseId) {
    this.loadingCaseDetails = true
    this.currentCase = await fetchCaseDetails(caseId)
    const tasks = await fetchTasks(caseId)
    this.currentCase.documents = [
      {
        name: "Kopi av ID til lånetaker",
        status: fileStatus.empty,
        taskId: tasks.find(task => task.taskType === "")
      },
      {
        name: "Kopi av ID til medlånetaker",
        status: fileStatus.rejected,
        taskId: tasks.find(task => task.taskType === "")
      },
      {
        name: "Kjøpekontrakt",
        status: fileStatus.approved,
        taskId: tasks.find(task => task.taskType === "")
      },
      {
        name: "Lånedokument",
        status: fileStatus.uploaded,
        taskId: tasks.find(task => task.taskType === "")
      },
      {
        name: "Tinglysningsskjema",
        status: fileStatus.uploaded,
        taskId: tasks.find(task => task.taskType === "")
      }
    ]
    this.loadingCaseDetails = false
  }
}

const caseStore = new CaseStore()
caseStore.initialize()

export default caseStore
