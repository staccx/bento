const SlackBot = require("slackbots")

// create a bot
const bot = new SlackBot({
  token: "xoxb-32797649078-473919401104-kBkUMiuE9WaOLLzPKJt6E4vF", // Add a bot https://my.slack.com/services/new/bot and put the token
  name: "Mr-X"
})

bot.on("start", function() {
  console.log("Started")
  // more information about additional params https://api.slack.com/methods/chat.postMessage
  const params = {
    icon_emoji: ":robot_face:"
  }

  // define channel, where bot exist. You can adjust it there https://my.slack.com/services
  // bot.postMessageToChannel('general', 'meow!', params);

  // define existing username instead of 'user_name'
  bot
    .postMessageToChannel(
      "x-notifications",
      "Releasing bento! Please dont push changes to git...",
      params
    )
    .always(function(data) {
      console.log(data)

      process.exit(0)
    })
  // If you add a 'slackbot' property,
  // you will post to another user's slackbot channel instead of a direct message
  // bot.postMessageToUser('user_name', 'meow!', {'slackbot': true, icon_emoji: ':cat:'});

  // define private group instead of 'private_group', where bot exist
  // bot.postMessageToGroup('private_group', 'meow!', params);
})
