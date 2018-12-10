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

async function fetch(workingDir) {
  try {
    return await git(workingDir).fetch()
  } catch (e) {
    throw e
  }
}

module.exports = {
  status,
  fetch
}
