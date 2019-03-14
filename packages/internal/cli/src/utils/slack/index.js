const { WebClient } = require("@slack/client")
const axios = require("axios")
const { token, conversationId } = require("./config")
const web = new WebClient(token)

const giphyKey = "h9FelAeRlPZrIoakIzTWcxIpUC8QYPbt"
// See: https://api.slack.com/methods/chat.postMessage
const postMessage = ({
  text,
  channel = conversationId,
  username = "mr-x",
  as_user = true,
  attachments = []
}) => {
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
        icon_emoji: ":robot-face:",
        attachments
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

const getGiphy = async (input = "", rating = "R") => {
  const { data } = await axios
    .get(
      `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=${input}&rating=${rating}`
    )
    .then(result => result.data)

  return {
    image_url: data.fixed_height_downsampled_url,
    fallback: input,
    color: "#727272",
    ts: new Date().getTime()
  }
}

module.exports = {
  postMessage,
  getGiphy
}
