/**
 * Generates a file stories/stories.generated.js containing
 * require statements for all *.stories.js-files found in packages/**
 */

const fs = require("fs")
const glob = require("glob")

const stories = glob.sync("src/**/*.stories.js", {
  ignore: "**/node_modules"
})

fs.writeFileSync(
  "stories/stories.generated.js",
  stories.map(storyPath => `require("../${storyPath}")`).join("\n")
)
