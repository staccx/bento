import { observable, action, computed } from "mobx"
import {
  fetchCases,
  fetchCaseDetails,
  uploadFile,
  setTaskCompleted,
  fetchTasks
} from "../api/api"

import fileStatus from "../fileStatus"

class CaseStore {
  @observable cases = null
  @observable caseDetails = {}
  @observable currentCaseId = null

  getCase(caseId) {
    return this.caseDetails[caseId]
  }

  @computed
  get currentCase() {
    return this.caseDetails[this.currentCaseId]
  }

  set currentCase(caseId) {
    this.currentCaseId = caseId
  }

  @action
  async initialize() {
    this.cases = await fetchCases()
    this.loading = this.cases.length
    this.cases.forEach(this.refreshCaseDetails, this) // async'ly add details to each case
  }

  @action
  refreshCurrentCase() {
    const caseId = this.currentCaseId
    this.currentCase = null
    this.refreshCaseDetails({ id: caseId })
    this.currentCase = caseId
  }

  @action
  async refreshCaseDetails({ id: caseId }) {
    const details = await fetchCaseDetails(caseId)
    const tasks = await fetchTasks(caseId)

    const documents = Object.keys(details.conditions).map(conditionName => {
      const condition = details.conditions[conditionName]

      return {
        condition: condition,
        name: condition.description,
        status: fileStatus[condition.status],
        task: tasks.find(task => task.context.conditionType === conditionName)
      }
    })

    let progress = 1

    if (
      documents.some(
        doc =>
          doc.status === fileStatus.pending ||
          doc.status === fileStatus.rejected
      )
    ) {
      progress = 2
    } else if (
      documents.every(
        doc =>
          doc.status === fileStatus.uploaded ||
          doc.status === fileStatus.approved
      )
    ) {
      progress = 3
    } else if (documents.every(doc => doc.status === fileStatus.approved)) {
      progress = 4
    }

    // mark case has having rejected documents if at least one doc is rejected
    const hasRejectedDocuments = documents.some(
      doc => doc.status === fileStatus.rejected
    )

    this.caseDetails[caseId] = {
      ...details,
      tasks,
      hasRejectedDocuments,
      progress,
      documents
    }

    this.loading--
  }

  documentSubmitter(document) {
    return async event => {
      document.status = fileStatus.uploading
      const file = event.target.files[0]
      const flowId = document.task.flowId
      const taskId = document.task.taskId

      return uploadFile(file)
        .then(([{ id }]) => setTaskCompleted(flowId, taskId, id))
        .then(res => this.refreshCurrentCase())
        .catch(console.error)
    }
  }
}

const caseStore = new CaseStore()
caseStore.initialize()
export default caseStore
