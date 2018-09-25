const SanityHelper = require("sanity-query-helper")
const path = require("path")
const fs = require("fs")
const { dashIt } = require("@staccx/formatting")

const filePath = path.resolve(__dirname, "stacc.config.json")
const helper = new SanityHelper({
  sanityOptions: {
    projectId: "8j24leyc",
    dataset: "production",
    useCdn: false
  }
})

const vCardUrl = name =>
  encodeURI(
    `https://s3.eu-west-2.amazonaws.com/stacc-vcards/${dashIt(name)}.vcf`
  )

helper
  .ofType("person")
  .pick("alias, name")
  .send()
  .then(result => result.filter(r => r.alias))
  .then(people => {
    fs.readFile(filePath, (err, data) => {
      const json = JSON.parse(data)
      json.aliases = people.map(person => ({
        source: `/.${person.alias.current}`,
        destination: vCardUrl(person.name)
      }))

      fs.writeFile(filePath, JSON.stringify(json), err => {
        if (err) {
          console.error("Error: ", err)
          return
        }
        console.log("Aliasing done")
      })
    })
  })
  .catch(console.error)
