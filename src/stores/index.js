import ApiStore from "./apiStore"
import UIStore from "./uiStore"

const apiStore = new ApiStore()
const uiStore = new UIStore()
uiStore.initialize().then(settings => {
  uiStore.setApiStore(apiStore)
  apiStore.setDefaults(settings)
  uiStore.setStep(2)
})

export { apiStore, uiStore }
