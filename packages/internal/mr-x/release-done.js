const { WebClient } = require("@slack/client")

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
const token = "xoxb-32797649078-473919401104-kBkUMiuE9WaOLLzPKJt6E4vF" // need to put this somewhere safe?

const web = new WebClient(token)

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = "x-notifications"

// See: https://api.slack.com/methods/chat.postMessage
web.chat
  .postMessage({
    channel: conversationId,
    text: "Releasing done. Go nuts!"
  })
  .then(res => {
    // `res` contains information about the posted message
    console.log("Message sent: ", res.ts)
  })
  .catch(console.error)
