const fs = require("fs-extra")

module.exports = (obj, fileName = "file.json") => {
  return new Promise(async (resolve, reject) => {
    try {
      await fs.writeJson(fileName, obj)
      return resolve(obj)
    } catch (e) {
      return reject(e)
    }
  })
}
