import { observable, action, autorun } from "mobx"
import chatApi from "../api/chat"
import caseStore from "./caseStore"
import userStore from "./userStore"

class ChatStore {
  @observable messages = []
  @observable currentRoom = null

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
  leaveRoom(roomName) {
    chatApi.leave(roomName)
  }

  @action
  joinRoom(roomName) {
    chatApi.join(roomName, msgs => (this.messages = msgs))
  }

  initialize(chatUrl) {
    chatApi.connect(chatUrl)

    chatApi.registerHandlers({
      onMessageReceived: messages => (this.messages = messages),
      onError: console.log
    })

    autorun(() => {
      if (caseStore.currentCase) {
        if (this.currentRoom) {
          console.log("leaving room", this.currentRoom)
          this.leaveRoom(this.currentRoom)
        }
        console.log("joining room", caseStore.currentCase.id)
        this.joinRoom(caseStore.currentCase.id)
        this.currentRoom = caseStore.currentCase.id
      }
    })
  }
}

const chatStore = new ChatStore()
chatStore.initialize("https://chat.nordea-finans.staccflow.com/")

export default chatStore
