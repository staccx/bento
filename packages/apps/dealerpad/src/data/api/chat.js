import io from "socket.io-client"

export const connect = (roomName, onPreviousMessages, onMessageReceived) => {
  const socket = io.connect("https://chat.nordea-finans.staccflow.com/")

  socket.on("message", onMessageReceived)
  socket.emit("join", roomName, onPreviousMessages)
}
