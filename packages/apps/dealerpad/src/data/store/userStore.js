import { observable } from "mobx"

class UserStore {
  @observable
  user = null

  initialize() {
    this.user = {
      name: "Peder Aas",
      id: "12345678"
    }
  }
}

const userStore = new UserStore()
userStore.initialize()

export default userStore
