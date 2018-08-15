import { observable, action } from "mobx"
import {
  fetchCases,
  fetchCaseDetails,
  uploadFile,
  setTaskCompleted,
  fetchTasks
} from "../api/api"

import fileStatus from "../fileStatus"

class CaseStore {
  @observable loadingCasesList = true
  @observable cases = []

  @observable loadingCaseDetails = true
  @observable currentCase = null
  @observable tasks = []

  getCase(caseId) {
    return this.cases.find(currentCase => currentCase.id === caseId)
  }

  @action
  async initialize() {
    this.loadingCasesList = true
    this.cases = await fetchCases()
    this.loadingCasesList = false
  }

  documentSubmitter(document) {
    console.log("creating upload function for", document)
    return async event => {
      const file = event.target.files[0]
      const flowId = document.task.flowId
      const taskId = document.task.taskId

      return uploadFile(file)
        .then(([{ id }]) => setTaskCompleted(flowId, taskId, id))
        .then(res => res.data)
        .catch(console.error)
    }
  }

  @action
  async setCurrentCase(caseId) {
    this.loadingCaseDetails = true
    this.currentCase = await fetchCaseDetails(caseId)
    this.tasks = await fetchTasks(caseId)

    this.currentCase.documents = Object.keys(this.currentCase.conditions).map(
      conditionName => {
        const condition = this.currentCase.conditions[conditionName]

        return {
          condition: condition,
          name: condition.description,
          status: fileStatus[condition.status],
          task: this.tasks.find(
            task => task.context.conditionType === conditionName
          )
        }
      }
    )

    this.loadingCaseDetails = false
  }
}

const caseStore = new CaseStore()
caseStore.initialize()

export default caseStore
