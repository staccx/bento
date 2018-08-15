import io from "socket.io-client"

class Chat {
  socket = null

  sendMessage(roomName, userName, userId, message) {
    console.log("sending message", roomName, userName, userId, message)
    return this.socket.emit(
      "message",
      roomName,
      userName,
      userId,
      message,
      data => console.log
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

  join(roomName, onPreviousMessages) {
    this.socket.emit("join", roomName, onPreviousMessages)
  }

  leave(roomName) {
    this.socket.emit("leave", roomName)
  }
}

const chat = new Chat()
export default chat
