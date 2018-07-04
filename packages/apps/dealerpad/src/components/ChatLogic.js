import React from "react"
import Chat from "./Chat"
import ChatBubble from "./ChatBubble"
import { Layout } from "@staccx/base"

const ChatLogic = ({ messages }) => {
  return (
    <Chat>
      <Layout rowGap="small">
        {messages.map(message => (
          <ChatBubble
            body={message.body}
            time={message.time}
            from={message.from}
            date={message.date}
            currentUser={false}
          />
        ))}
      </Layout>
    </Chat>
  )
}

export default ChatLogic
