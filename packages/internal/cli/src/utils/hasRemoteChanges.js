const git = require("simple-git/promise")

async function status(workingDir) {
  let statusSummary = null
  try {
    statusSummary = await git(workingDir).status()
  } catch (e) {
    console.error(e)
    // handle the error
  }

  return statusSummary
}

module.exports = status
