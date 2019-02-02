const { getSanityClient } = require("../cmds/__helpers")
module.exports = ({ client, projectId, dataset, type = "i18n" }) => {
  const c = client || getSanityClient(projectId, dataset)

  const query = `*[_type == $i18n] {"id": _id, key, value, i18nKey}`
  return c.fetch(query, { i18n: type })
}
