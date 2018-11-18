const sanityClient = require("@sanity/client")

module.exports = (projectId, dataset, type = "i18n") => {
  const client = sanityClient({
    projectId,
    dataset,
    useCdn: true
  })

  const query = `*[_type == $i18n] {"id": _id, key, value}`
  console.log("Fetching texts", query)
  return client.fetch(query, { i18n: type })
}
