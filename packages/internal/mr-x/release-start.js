// const SlackBot = require("slackbots")

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
    text: "Releasing bento! Please dont push changes to git..."
  })
  .then(res => {
    // `res` contains information about the posted message
    console.log("Message sent: ", res.ts)
  })
  .catch(console.error)
// create a bot
// const bot = new SlackBot({
//   token: "xoxb-32797649078-473919401104-kBkUMiuE9WaOLLzPKJt6E4vF", // Add a bot https://my.slack.com/services/new/bot and put the token
//   name: "mr-x"
// })
//
// bot.on("start", function() {
//   console.log("Started")
//   // more information about additional params https://api.slack.com/methods/chat.postMessage
//   const params = {
//     icon_emoji: ":robot_face:"
//   }
//
//   // define channel, where bot exist. You can adjust it there https://my.slack.com/services
//   // bot.postMessageToChannel('general', 'meow!', params);
//
//   // define existing username instead of 'user_name'
//
//   // bot.getChannels().then(function(data) {
//   //   const fi = data.channels.map(c => c.name)
//   //   console.log(fi)
//   //
//   //   process.exit(0)
//   // })
//
//   bot
//     .postMessageToChannel(
//       "x-notifications",
//       "Releasing bento! Please dont push changes to git...",
//       params
//     )
//     .always(function(data) {
//       console.log(data)
//
//       process.exit(0)
//     })
//   // If you add a 'slackbot' property,
//   // you will post to another user's slackbot channel instead of a direct message
//   // bot.postMessageToUser('user_name', 'meow!', {'slackbot': true, icon_emoji: ':cat:'});
//
//   // define private group instead of 'private_group', where bot exist
//   // bot.postMessageToGroup('private_group', 'meow!', params);
// })
