import { observable, action } from "mobx"
import chatApi from "../api/chat"
import caseStore from "./caseStore"
import userStore from "./userStore"

class ChatStore {
  @observable
  messages = []
  @observable
  currentRoom = null

  @action
  sendMessage(message) {
    return chatApi.sendMessage(
      caseStore.currentCase.id,
      userStore.user.name,
      userStore.user.id,
      message
    )
  }

  @action
  setCurrentRoom(roomName) {
    if (roomName !== this.currentRoom) {
      if (this.currentRoom) {
        chatApi.leave(this.currentRoom)
        this.currentRoom = null
      }

      if (roomName) {
        chatApi.join(roomName, messages => (this.messages = messages))
        this.currentRoom = roomName
      }
    }
  }

  initialize(chatUrl) {
    chatApi.connect(chatUrl)

    chatApi.registerHandlers({
      onMessageReceived: messages => (this.messages = messages),
      onError: console.log
    })
  }
}

const chatStore = new ChatStore()
chatStore.initialize("https://chat.nordea-finans.staccflow.com/")

export default chatStore
