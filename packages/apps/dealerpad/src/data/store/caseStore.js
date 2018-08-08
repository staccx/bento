import { observable, action } from "mobx"
import { fetchCases, fetchCaseDetails, fetchTasks } from "../api"

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

  @action
  async setCurrentCase(caseId) {
    this.loadingCaseDetails = true
    this.currentCase = await fetchCaseDetails(caseId)
    this.currentCase.documents = (await fetchTasks(caseId)) || []
    this.loadingCaseDetails = false
  }
}

const caseStore = new CaseStore()
caseStore.initialize()

export default caseStore
