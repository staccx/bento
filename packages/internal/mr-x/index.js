const { WebClient } = require("@slack/client")
const { token, conversationId } = require("./config")
const web = new WebClient(token)

// See: https://api.slack.com/methods/chat.postMessage
const postMessage = (
  text,
  channel = conversationId,
  username = "mr-x",
  as_user = true
) => {
  if (!text) {
    throw new Error("Cannot post message without text")
  }

  return new Promise((resolve, reject) => {
    web.chat
      .postMessage({
        channel,
        text,
        as_user,
        username,
        link_names: true,
        parse: "full",
        bot_id: "BDYGBCERZ",
        icon_emoji: ":robot-face:"
      })
      .then(res => {
        // `res` contains information about the posted message
        return resolve(res)
      })
      .catch(error => {
        return reject(error)
      })
  })
}

module.exports = {
  postMessage
}
