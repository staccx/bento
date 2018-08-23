import io from "socket.io-client"
import axios from "axios"

class Chat {
  socket = null
  axiosInstance = null

  sendMessage(chatroomName, name, id, msg) {
    return this.socket.emit(
      "message",
      {
        chatroomName,
        name,
        id,
        msg,
        userType: "dealer",
        msgType: "message"
      },
      console.log
    )
  }

  connect(chatUrl) {
    this.socket = io.connect(chatUrl)
  }

  registerHandlers({
    onMessageReceived,
    onStartedTyping,
    onStoppedTyping,
    onError
  }) {
    this.socket.on("message", onMessageReceived)
    this.socket.on("typing", onStartedTyping)
    this.socket.on("stoppedtyping", onStoppedTyping)
    this.socket.on("error", onError)
  }

  join(chatroomName, onPreviousMessages) {
    this.socket.emit(
      "join",
      { chatroomName, userType: "dealer" },
      onPreviousMessages
    )
  }

  leave(roomId) {
    this.socket.emit("leave", { roomId, userType: "dealer" })
  }
}

const axiosInstance = axios.create({ baseURL: "/" })

export const fetchUnreadMessages = caseId =>
  axiosInstance
    .get("/getUnreads", {
      params: {
        chatroomName: caseId,
        userType: "dealer"
      }
    })
    .then(res => (res.data.length ? res.data : []))
    .catch(err => [])

const chat = new Chat()

export default chat
