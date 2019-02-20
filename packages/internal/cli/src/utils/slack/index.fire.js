const { postMessage, getGiphy } = require("./index")
;(async () => {
  const giphy = await getGiphy()
  await postMessage({
    text: "Please wait",
    attachments: [giphy]
  })
})()
